import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  const { from, user_subject, user_message } = req.body;

  if (!from || !user_subject || !user_message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // Your Gmail App Password
      },
    });

    // Define email options
    const mailOptions = {
      from: from, // Sender's email
      to: process.env.GMAIL_USER, // Your email to receive the message
      subject: user_subject,
      text: user_message,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);

    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Failed to send email." });
  }
}
