const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Set up nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nitro7893@gmail.com', // replace with your email
      pass: 'hmatfs1980', // replace with your password
    },
  });

  // Set up email options
  const mailOptions = {
    from: 'nitro7893@gmail.com', // replace with your email
    to: 'ahmed.khazaali2@gmail.com', // replace with your recipient email
    subject: 'New Contact Form Submission',
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }

    return res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});