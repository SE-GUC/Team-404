const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  age: {
    type: Number,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  userType: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },

  // Candidate
  skills: { type: [String], required: false, unique: false },
  interests: { type: [String], required: false, unique: false },
  pastEventsAndTasks: { type: [String], required: false, unique: false },
  reviewsRecieved: { type: [String], required: false, unique: false },

  // Partner
  board: { type: [String], required: false },
  pastEvents: { type: [String], required: false },
  reports: { type: [String], required: false },
  organisationName: { type: String, required: false, unique: false },
  businessPartners: { type: [String], required: false, unique: false },
  eventsOrganized: { type: [String], required: false, unique: false },
  fieldOfWork: { type: String, required: false, unique: false },
  projectHistory: { type: [String], required: false, unique: false }

})
/* const LoginSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number
    }
})

module.exports = User = mongoose.model('users', LoginSchema) */

module.exports = User = mongoose.model('users', UserSchema)
