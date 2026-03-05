const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); // import cors

const app = express();

// CORS middleware
app.use(cors({
    origin: 'http://localhost:3000', // React frontend
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
}));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Test connection
transporter.verify((error, success) => {
    if (error) console.error('Error connecting to email server:', error);
    else console.log('Email server is ready to take messages');
});

// POST endpoint
app.post('/submit-form', async (req, res) => {
    const { name, email, message } = req.body;
    const mailOptions = {
    from: process.env.EMAIL_USER,      // sustainauraofficial@gmail.com
    replyTo: email,                     // user-entered email
    to: 'vaghajiyanisuhasi@gmail.com', // destination (your Gmail)
    subject: `New Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
};


    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to send email', error });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
