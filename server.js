// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  // Configure your SMTP transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youraddress@gmail.com',
      pass: 'yourpassword'
    }
  });
  // Email options
  let mailOptions = {
    from: email,
    to: 'youraddress@gmail.com',
    subject: `Contact Form: ${name}`,
    text: message
  };
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent!' });
  } catch (err) {
    res.status(500).json({ message: 'Error sending email.' });
  }
});
app.listen(3001, () => console.log('Server running on port 3001'));

// In your contact form submit handler
fetch('http://localhost:3001/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    })
  })
  .then(res => res.json())
  .then(data => alert(data.message))
  .catch(err => alert('Error sending message.'));