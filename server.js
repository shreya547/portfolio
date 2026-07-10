require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Email Transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Home Route
app.get("/", (req, res) => {
    res.send("Portfolio Backend is Running...");
});

// Contact Route
app.post("/contact", async (req, res) => {

    try {

        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields."
            });
        }

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `📩 New Portfolio Message from ${name}`,
            html: `
                <h2>New Contact Form Message</h2>

                <p><strong>Name:</strong> ${name}</p>

                <p><strong>Email:</strong> ${email}</p>

                <p><strong>Message:</strong></p>

                <p>${message}</p>
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: "Message sent successfully!"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to send message."
        });

    }

});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`🚀 Server running on http://localhost:${PORT}`);

});