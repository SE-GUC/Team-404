const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(
  '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'
)

const msg = (to, message, subject) => {
  const email = {
    to: to,
    from: 'Lirten.SE.404@gmail.com',
    subject: subject,
    text: message,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  }
  return sgMail.send(email)
}

module.exports = msg

// const sendNotif = require('../../utils/mailer')
// sendNotif(to,message,subject)

// finding a specific user
// const User = require("../../Models/User");
// const users = await User.find({});
//     if (task.consultancyRequested == true) {
//       users.forEach(user => {
//         if (user.userType == "Consultant") {
//           sendNotif(user.email, "Consultancy req", "LirtenHub");
//         }
//       });
//     }
