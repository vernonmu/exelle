const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const config = require('./config');
const bodyParser = require('body-parser');
const NodeGeocoder = require('node-geocoder');
const port = config.port;

const nodemailer = require('nodemailer');

app.use(express.json());
app.use(cors());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'))


app.post('/booking', (req, res) => {
  console.log(req.body);
  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.ethUser,
        pass: config.ethPass
      }
    });

    let mailOptions = {
      from: '"Excelsior" <info@excelsiorlimo.com>',
      to: 'vernonmu@gmail.com',
      subject: 'New booking request',
      text: "hello world.",
      html: `<p>We have received a new booking from our webform. Here are the details below: </p><h4>Booking details</h4><p>${req.body.name}</p><p>${req.body.email}</p>`
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }

      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
  });

  res.send(200)
});

app.post('/contact', (req, res) => {
  console.log(req.body);
  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.ethUser,
        pass: config.ethPass
      }
    });

    let mailOptions = {
      from: '"Excelsior" <info@excelsiorlimo.com>',
      to: 'vernonmu@gmail.com',
      subject: 'New contact request',
      text: "hello world.",
      html: `<p>We have received a <strong>new contact request</strong> from our webform. Here are the details below: </p><h4>Contact Information</h4><p>${req.body.name}</p><p>${req.body.email}</p><p>${req.body.phone}</p><p>${req.body.message}</p>`
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }

      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
  });

  res.send(200)
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
})
