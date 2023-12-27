const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Example route to handle form submission
app.post('/submit', async (req, res) => {
  // Get form data
  const { name, email, message } = req.body;

  // Logic to send email (using nodemailer, adjust as needed)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nitro7893@gmail.com', // Replace with your email
      pass: 'hmatfs1980', // Replace with your email password
    },
  });

  const mailOptions = {
    from: 'nitro7893@gmail.com', // Replace with your email
    to: 'nitro7893@gmail.com', // Replace with your email
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.send('Thank you for your submission!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
