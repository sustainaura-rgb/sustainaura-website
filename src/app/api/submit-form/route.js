import dbConnect from '../../../lib/db';
import Contact from '../../../lib/models/Contact';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// utility to escape HTML
function escapeHtml(unsafe = "") {
    return String(unsafe)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function POST(req) {
    try {
        await dbConnect();

        const body = await req.json();
        const { name = "", email = "", inquiry = "", message = "" } = body;
        const inquiryText = (inquiry && inquiry.trim()) || (message && message.trim()) || "";

        if (!name.trim() || !email.trim() || !inquiryText) {
            return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 });
        }

        let contactDoc;
        try {
            contactDoc = await Contact.create({
                name: name.trim(),
                email: email.trim(),
                inquiry: inquiryText || undefined,
                message: inquiryText
            });
            console.log(`💾 Saved contact to DB (id: ${contactDoc._id})`);
        } catch (dbErr) {
            console.error("❌ MongoDB save error:", dbErr);
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const toAddress = process.env.EMAIL_TO || process.env.EMAIL_USER || "info@sustainaura.eco";
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

        let emailSent = false;
        let emailError = null;
        try {
            await transporter.sendMail(mailOptions);
            emailSent = true;
            console.log(`✉️ Email sent to ${toAddress}`);
        } catch (mailErr) {
            emailError = mailErr.message || String(mailErr);
            console.error("❌ Error sending email:", mailErr);
        }

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
        return NextResponse.json({
            success: overallSuccess,
            message: "Contact received",
            data: {
                savedToDB: !!contactDoc,
                contactId: contactDoc?._id || null,
                emailSent,
                emailError,
            },
        }, { status: 200 });

    } catch (err) {
        console.error("❌ Unexpected error in /submit-form:", err);
        return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
    }
}
