import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json({ limit: "10kb" }));


const useSendGrid = !!process.env.SENDGRID_API_KEY;

let transportOptions;

if (useSendGrid) {
  console.log("✅ Using SendGrid SMTP");
  transportOptions = {
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false,
    auth: {
      user: "apikey",
      pass: process.env.SENDGRID_API_KEY
    }
  };
} else {
  console.log("⚠️ Using Gmail SMTP (may fail on Render)");
  transportOptions = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  };
}

const transporter = nodemailer.createTransport({
  ...transportOptions,
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,
  tls: { rejectUnauthorized: false }
});

transporter.verify((err) => {
  if (err) {
    console.error("❌ Mail transporter error:", err.message);
  } else {
    console.log("✅ Mail server ready");
  }
});


app.post("/api/contact", async (req, res) => {
  const { name, email, subject = "Website Contact", message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields"
    });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📩 ${subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `
    });

    await transporter.sendMail({
      to: email,
      subject: "Thanks for contacting me 👋",
      html: `<p>Hi ${name},<br/>I’ll get back to you soon.<br/>— Samarth</p>`
    });

    res.json({ success: true });
  } catch (err) {
    console.error("❌ Mail error:", err.message);
    res.status(500).json({ success: false });
  }
});


app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
