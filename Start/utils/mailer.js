const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);


const msg = (to, message, subject) => {
  const email = {
    to: to,
    from: "Lirten.SE.404@gmail.com",
    subject: subject,
    text: message,
    html: "<strong>and easy to do anywhere, even with Node.js</strong>"
  };
  return sgMail.send(email);
};

module.exports = msg;


<<<<<<< HEAD
//const sendNotif = require('../../utils/mailer')
//sendNotif(to,message,subject)

=======

//const sendNotif = require('../../utils/mailer')
//sendNotif(to,message,subject)
>>>>>>> e399a9680744be41308b76585d47da016836c14a
