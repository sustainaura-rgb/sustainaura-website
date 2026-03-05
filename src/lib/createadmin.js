// createAdmin.js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// ====== Setup __dirname for ES module ======
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ====== Load environment variables from .env ======
dotenv.config({ path: resolve(__dirname, '../.env') });

// ====== Connect to MongoDB ======
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// ====== Admin Schema ======
const adminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }, // hashed
});
const Admin = mongoose.model("Admin", adminSchema, "admins");

// ====== Create Admin Function ======
async function createAdmin() {
  const username = "admin";       // change to your desired username
  const plainPassword = "sustainaura"; // change to your desired password

  try {
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      console.log("⚠️ Admin already exists:", existingAdmin.username);
      process.exit();
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    // Create and save admin
    const admin = new Admin({ username, password: hashedPassword });
    await admin.save();

    console.log("✅ Admin created successfully:", admin.username);
    process.exit();
  } catch (err) {
    console.error("❌ Error creating admin:", err);
    process.exit(1);
  }
}

// ====== Run the function ======
createAdmin();
