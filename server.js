import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json({ limit: "10kb" }));

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


app.post("/api/contact", async (req, res) => {
  const { name, email, subject = "Website Contact", message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false });
  }

  try {
    const sgResponse = await sgMail.send({
      to: process.env.EMAIL_USER,
      from: process.env.EMAIL_USER, 
      replyTo: email,
      subject: `📩 ${subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `
    });
    console.log('✅ SendGrid response:', Array.isArray(sgResponse) ? sgResponse.map(r => ({ statusCode: r.statusCode })) : { statusCode: sgResponse?.statusCode });

    res.json({ success: true });
  } catch (err) {
    console.error("❌ SendGrid API error:", err.response?.body || err.message);
    res.status(500).json({ success: false });
  }
});


app.use(express.static(path.join(__dirname, "dist")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "dist", "index.html"))
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
