const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const router = express.Router()
const Notification = require('../../Models/Notification')
const validator = require('../../Validation/notificationValid')
const joi = require('joi')
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));


var nodemailer = require('nodemailer');

var auth = {
  type: 'oauth2',
  user: 'lirten.SE.404@gmail.com',
  clientId: '983462145254-stufupepsjfbn1ehamh2puc1pmp3eq5h.apps.googleusercontent.com',
  clientSecret: 'JV95KwfO7UvEWYJhTIekHxbN',
  refreshToken: '1/3Q46brgsM6d6lJleNOTWS7D3dDSr_MZ7yFR869KVFoI',
};





app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
router.post('/send', function(req, res){
  response = {
    sender: req.body.sender,
    senderEmail: req.body.email,
    recipient: req.body.recipient,
    subject: req.body.subject,
    message: req.body.message
  }
  
  
  var mailOptions = {
      from: req.body.name,
      to: req.body.recipient,
      subject: req.body.subject,
      text: req.body.message,
      html: 'Message from: ' + req.body.name + '<br></br> Email: ' +  req.body.email + '<br></br> Message: ' + req.body.message,
  };
var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: auth,
  });
transporter.sendMail(mailOptions, (err, res) => {
      if (err) {
          return console.log(err);
      } else {
          console.log(JSON.stringify(res));
      }
  });
})



module.exports = router
