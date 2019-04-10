const mongoose = require('mongoose')

// ---== Define MongoDb Log Schema & Model

const logSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  message: String,
  timestamp: Date
})
const Log = mongoose.model('Log', logSchema)

// ---== Logger class
class Logger {
  static log (msg) {
    try {
      new Log({
        _id: mongoose.Types.ObjectId(),
        message: msg,
        timestamp: Date.now().toString()
      }).save()
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = Logger
