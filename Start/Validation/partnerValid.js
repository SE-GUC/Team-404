  const Joi = require('joi')

module.exports = {
  createValidation: request => {
    const createSchema = {
      id: Joi.string(),
      organisationname: Joi.string().required(),
      partnerss: Joi.string(),
      boardmembers: Joi.string().required(),
      eventsorganized: Joi.string(),
      fieldofwork: Joi.string().required(),
      projecthistory: Joi.string(),
      feedbackform: Joi.string(),
    }

    return Joi.validate(request, createSchema)
  },

  updateValidation: request => {
    const updateSchema = {
        organisationname: Joi.string(),
        partnerss: Joi.string(),
        boardmembers: Joi.string(),
        eventsorganized: Joi.string(),
        fieldofwork: Joi.string(),
        projecthistory: Joi.string(),
        feedbackform: Joi.string(),
    }

    return Joi.validate(request, updateSchema)
  }
}