const mongoose = require('mongoose')
const schema = mongoose.Schema

const PartnerSchema = new schema({
  name: {type: String,required: true},
  email: {type: String,required: true},
  password: {type: String,required: true},
  age: {type: Number,required: true},
  username: {type: String,required: true},
  phonenumber: {type: Number,required: true},
  usertype: {type: String,required: true},
  location: {type: String,required: true},
  organisationname: { type: String, required: true, unique: false },
  partners: { type: String, required: false, unique: false },
  boardmembers: { type: String, required: true, unique: false },
  eventsorganized: { type: String, required: false, unique: false },
  fieldofwork: { type: String, required: true, unique: false },
  projecthistory: { type: String, required: false, unique: false },
  feedbackform: { type: String, required: false, unique: false },
  notif: {type: []},
})

const Partner = mongoose.model('partners', PartnerSchema)

module.exports = Partner
