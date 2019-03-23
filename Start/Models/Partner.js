const mongoose = require('mongoose')
const schema = mongoose.Schema

const PartnerSchema = new schema({
  organisationname: { type: String, required: true, unique: false },
  partners: { type: String, required: false, unique: false },
  boardmembers: { type: String, required: true, unique: false },
  eventsorganized: { type: String, required: false, unique: false },
  fieldofwork: { type: String, required: true, unique: false },
  projecthistory: { type: String, required: false, unique: false },
  feedbackform: { type: String, required: false, unique: false },
})

const Partner = mongoose.model('partners', PartnerSchema)

module.exports = Partner
