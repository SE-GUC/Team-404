
const mongoose = require('mongoose')
const schema = mongoose.Schema
const ObjectId = schema.Types.ObjectId
const TaskSchema = new schema({
  _id: ObjectId,
  description: { type: String, required: true },
  eta: { type: Number, required: true },
  levelOfCommitment: { type: String, required: true, unique: false },
  partner: { type: String, required: true },
  monetaryCompensation: { type: Number, required: true },
  skills: { type: String, enum: ["CS" , "Design" , "Word" , "Civil" , "Accounting"], required: true  },
  lifeCycleStatus: { type: String, enum: ["Awaiting Approval" , "Denied" , "Pending Acceptance" , "Accepted" , "Completed" , "In Progress" ], required: true },
  experienceNeeded: { type: String, required: true },
  consultancyRequested: { type: Boolean, required: true },
  consultant:{type: String , required: false},
  applications: { type: [String], required: false }
})

// TaskSchema.index({ Description: 1, eta: 1, levelofcommitment: 1 }, { unique: true })

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task
