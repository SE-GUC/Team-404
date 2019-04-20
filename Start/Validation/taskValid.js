const Joi = require('joi')

module.exports = {
  createValidation: request => {
    const createSchema = {
      title: Joi.string().required(),
      description: Joi.string().required(),
      eta: Joi.number().required(),
      levelOfCommitment: Joi.string().required(),
      partner: Joi.string().required(),
      monetaryCompensation: Joi.number().required(),
      skills: Joi.string().required(),
      lifeCycleStatus: Joi.string()
        .valid([
          'Awaiting Approval',
          'Denied',
          'Pending Acceptance',
          'Accepted',
          'Completed',
          'In Progress'
        ])
        .required(),
      experienceNeeded: Joi.string().required(),
      consultancyRequested: Joi.boolean().required(),
      consultant: Joi.string(),
      applications: Joi.array()
    }

    return Joi.validate(request, createSchema)
  }
}

module.exports = {
  updateValidation: request => {
    const updateSchema = {
      title: Joi.string(),
      description: Joi.string(),
      eta: Joi.number(),
      levelOfCommitment: Joi.string(),
      partner: Joi.string(),
      monetaryCompensation: Joi.number(),
      skills: Joi.string(),
      lifeCycleStatus: Joi.string(),
      experienceNeeded: Joi.string(),
      consultancyRequested: Joi.boolean(),
      consultant: Joi.string(),
      applications: Joi.array() }

    return Joi.validate(request, updateSchema)
  }
}
