import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();

  //use regex to validate email
  const email = body.email;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response("Invalid email", { status: 400 });
  }

  const phone = body.phone;

  if (phone.length === 0) {
    return new Response("Phone number is required", { status: 400 });
  }

  const name = body.name;

  if (name.length === 0) {
    return new Response("Name is required", { status: 400 });
  }

  const message = body.message;

  //not required

  const subject = `New Teaser Form Submission | From:${email}`;

  const emailMessage = `

    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Message: ${message}
    `;

  const emailSent = await sendEmail(subject, emailMessage);

    if (emailSent) {
        return new Response("Email sent", { status: 200 });
    } else {
        return new Response("Error sending email", { status: 500 });
    }
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail = async (subject: string, message: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: process.env.EMAIL_USERNAME,
    subject: subject,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};
