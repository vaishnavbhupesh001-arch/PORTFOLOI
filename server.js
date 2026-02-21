require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// ✅ Allow frontend to connect
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
    methods: ["GET", "POST"],
  })
);

// ✅ Parse JSON body
app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
  res.json({ ok: true, message: "Backend running ✅" });
});

// ✅ Contact API (this matches your frontend fetch)
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        ok: false,
        error: "All fields are required",
      });
    }

    // Create transporter (Gmail example)
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: process.env.MAIL_SECURE === "true",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Send mail
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b></p>
          <p style="white-space: pre-wrap;">${message}</p>
          <hr/>
          <p style="font-size:12px;color:#777;">
            Sent from your portfolio website.
          </p>
        </div>
      `,
    });

    return res.json({ ok: true, message: "Email sent successfully ✅" });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return res.status(500).json({
      ok: false,
      error: "Server error while sending email ❌",
    });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
