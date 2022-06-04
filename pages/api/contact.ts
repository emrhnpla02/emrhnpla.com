import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 645,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  transporter
    .sendMail({
      from: email,
      subject: `Contact form submission from ${name}`,
      html: `
       <p>You have a new contact form submission</p><br>
       <p><strong>Name: </strong> ${name} </p><br>
       <p><strong>Subject: </strong> ${subject} </p><br>
       <p><strong>Message: </strong> ${message} </p><br>
`,
    })
    .then((emailRes) => {
      res.status(200).json(emailRes);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}
