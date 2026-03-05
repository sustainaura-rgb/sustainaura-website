// server.js
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import nodemailer from "nodemailer";

// ========== __dirname for ES module ==========
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ========== Load environment variables ==========
dotenv.config({ path: resolve(__dirname, "../.env") });

// ========== Express ==========
const app = express();
app.use(express.json()); // body parsing

// CORS - allow client origin via env or default to localhost:3000
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";
app.use(
  cors({
    origin: CLIENT_URL,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// ========== Env check (helpful) ==========
const missing = ["MONGO_URI", "EMAIL_USER", "EMAIL_PASS"].filter(k => !process.env[k]);
if (missing.length) {
  console.warn("⚠️ Missing env vars (set them in .env or host):", missing.join(", "));
  // don't exit — allows development without all vars; but you can uncomment next line to force exit
  // process.exit(1);
}

// ========== Nodemailer Setup ==========
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// verify connection
transporter.verify((err, success) => {
  if (err) console.error("❌ Email server verify error:", err);
  else console.log("✅ Email server is ready");
});

// ========== MongoDB ==========
if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));
} else {
  console.log("ℹ️  No MONGO_URI provided — skipping DB connection");
}

// ========== Models ==========
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  color: String,
  dimensions: String,
  material: String,
  category: String,
  link: String,
});
const Product = mongoose.model("Product", productSchema, "products");

const carouselSchema = new mongoose.Schema({ title: String, image: String, path: String });
const Carousel = mongoose.model("Carousel", carouselSchema, "carousels");

// Contact schema (keeps `message` if old docs have it, but we will store `inquiry` if provided)
// Contact schema (inquiry is required; message kept for legacy)
// const contactSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   //inquiry: { type: String, required: true }, // now required

//   message: { type: String },                  // legacy/optional
//   createdAt: { type: Date, default: Date.now },
//   emailSent: { type: Boolean, default: false },
//   emailError: { type: String, default: null },
// });
// const Contact = mongoose.model("Contact", contactSchema, "contacts");
// Contact schema (message required; inquiry stored too for compatibility)
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true }, // required canonical field
  inquiry: { type: String },                  // optional (frontend uses this)
  createdAt: { type: Date, default: Date.now },
  emailSent: { type: Boolean, default: false },
  emailError: { type: String, default: null },
});
const Contact = mongoose.model("Contact", contactSchema, "contacts");

// ========== Routes ==========
app.get("/api/products/:category", async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
});

app.get("/api/carousel", async (req, res) => {
  try {
    const items = await Carousel.find({});
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching carousel items", error });
  }
});

// ========== Contact Form (save to DB + send email) ==========
app.post("/submit-form", async (req, res) => {
  try {
    // accept both 'inquiry' (new) and 'message' (legacy)
    const { name = "", email = "", inquiry = "", message = "" } = req.body;
    const inquiryText = (inquiry && inquiry.trim()) || (message && message.trim()) || "";

    // Basic validation
    if (!name.trim() || !email.trim() || !inquiryText) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Save submission to DB; store both fields (so migration is easier)
    // Save submission to DB; store inquiry and also copy into message for backward compatibility
    // // Save submission to DB; ensure message is set (required)
    // let contactDoc;
    // try {
    //   contactDoc = await Contact.create({
    //     name: name.trim(),
    //     email: email.trim(),
    //     inquiry: inquiryText || undefined,
    //     message: inquiryText // always set message from inquiryText (prevents validation error)
    //   });
    //   console.log(`💾 Saved contact to DB (id: ${contactDoc._id})`);
    // } catch (dbErr) {
    //   console.error("❌ MongoDB save error:", dbErr);
    //   // continue to attempt email send even if DB save fails
    // }
    // Save submission to DB; ensure message is set (required)
    let contactDoc;
    try {
      contactDoc = await Contact.create({
        name: name.trim(),
        email: email.trim(),
        inquiry: inquiryText || undefined,
        message: inquiryText // always set message from inquiryText (prevents validation error)
      });
      console.log(`💾 Saved contact to DB (id: ${contactDoc._id})`);
    } catch (dbErr) {
      console.error("❌ MongoDB save error:", dbErr);
      // continue to attempt email send even if DB save fails
    }

    // Prepare email (use inquiry text)
    const toAddress = process.env.EMAIL_TO || "info@sustainaura.eco";
    const fromName = process.env.EMAIL_NAME || "Sustainaura Contact";

    const mailOptions = {
      from: `${fromName} <${process.env.EMAIL_USER}>`,
      to: toAddress,
      replyTo: email,
      subject: `Website Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nInquiry:\n${inquiryText}`,
      html: `<h3>New contact form submission</h3>
             <p><strong>Name:</strong> ${escapeHtml(name)}</p>
             <p><strong>Email:</strong> ${escapeHtml(email)}</p>
             <p><strong>Inquiry:</strong><br/>${escapeHtml(inquiryText).replace(/\n/g, "<br/>")}</p>`,
    };

    // Send email
    let emailSent = false;
    let emailError = null;
    try {
      await transporter.sendMail(mailOptions);
      emailSent = true;
      console.log(`✉️ Email sent to ${toAddress} for contact id: ${contactDoc?._id || "N/A"}`);
    } catch (mailErr) {
      emailError = mailErr.message || String(mailErr);
      console.error("❌ Error sending email:", mailErr);
    }

    // Update contact doc with email result if saved
    if (contactDoc) {
      try {
        contactDoc.emailSent = emailSent;
        contactDoc.emailError = emailError;
        await contactDoc.save();
      } catch (updErr) {
        console.error("❌ Error updating contact doc:", updErr);
      }
    }

    const overallSuccess = !!(contactDoc || emailSent);
    return res.status(200).json({
      success: overallSuccess,
      message: "Contact received",
      data: {
        savedToDB: !!contactDoc,
        contactId: contactDoc?._id || null,
        emailSent,
        emailError,
      },
    });
  } catch (err) {
    console.error("❌ Unexpected error in /submit-form:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

// utility to escape HTML (regex-based for Node compatibility)
function escapeHtml(unsafe = "") {
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ========== Start server ==========

// Import fs for reading index.html
import fs from "fs";
import path from "path";

// Serve static files from the React app build directory
// Adjust path relative to src/
const buildPath = resolve(__dirname, "../build");
app.use(express.static(buildPath));

// Handle React routing, return all requests to React app with dynamic meta tags
app.get("*", (req, res) => {
  const filePath = resolve(buildPath, "index.html");

  fs.readFile(filePath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("Error reading index.html", err);
      return res.status(500).send("Error loading page");
    }

    // Default metadata values (must match what's in your public/index.html)
    const defaultTitle = "SustainAura - Eco-Friendly Shower Liners";
    const defaultDesc = "Sustainability Starts At Home. Shop our premium PEVA shower curtain liners. 30% recycled materials, water-resistant, and non-toxic.";
    const defaultImage = "SustainAura.png";

    // Define route-specific metadata
    let title = defaultTitle;
    let description = defaultDesc;
    let image = defaultImage;

    // Logic for specific routes
    if (req.path === "/4G") {
      title = "4G Lightweight PEVA Shower Liner | SustainAura";
      description = "Shop our 4G lightweight shower liner. Eco-friendly, 30% recycled materials, and perfect for everyday use.";
      image = "4G%20Frosty.jpg";
    } else if (req.path === "/6G") {
      title = "6G Premium PEVA Shower Liner | SustainAura";
      description = "Shop our 6G premium shower liner. Durable, eco-friendly, and perfect for hotels or luxury bathrooms.";
      image = "6G%20Frosty.jpg";
    } else if (req.path === "/8G") {
      title = "8G Heavy Duty PEVA Shower Liner | SustainAura";
      description = "Shop our 8G heavy-duty shower liner. Maximum durability, weighted magnets, and 30% recycled materials.";
      image = "8G%20Frosty.jpg";
    }

    // domain URL (fallback to request host if not set)
    const domain = process.env.CLIENT_URL || `https://${req.get("host")}`;

    // Replace Title
    htmlData = htmlData.replace(
      /<title>.*<\/title>/,
      `<title>${title}</title>`
    );
    htmlData = htmlData.replace(
      new RegExp(defaultTitle, "g"),
      title
    );

    // Replace Description
    htmlData = htmlData.replace(
      new RegExp(defaultDesc, "g"),
      description
    );

    // Replace Image
    // Note: In build/index.html, %PUBLIC_URL% is usually replaced by empty string or /
    // We look for the filename we know is there
    htmlData = htmlData.replace(
      new RegExp(defaultImage, "g"),
      image.startsWith("http") ? image : `${domain}/${image}`
    );

    res.send(htmlData);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT} (client: ${CLIENT_URL})`));
