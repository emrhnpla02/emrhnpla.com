import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  transporter
    .sendMail({
      from: email,
      to: "emrhnpla02@gmail.com",
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

export const config = {
  api: {
    externalResolver: true,
  },
};
