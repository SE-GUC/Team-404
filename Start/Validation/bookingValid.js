const Joi = require('joi')

module.exports = {
  createValidation: request => {
    const createSchema = {
      event: Joi.string().required(),
      partner: Joi.string().required(),
      attendee: Joi.string().required(),
      dateofbooking: Joi.date().required()
    }

    return Joi.validate(request, createSchema)
  },

  updateValidation: request => {
    const updateSchema = {
      event: Joi.string(),
      partner: Joi.string(),
      attendee: Joi.string(),
      dateofbooking: Joi.date()
    }

    return Joi.validate(request, updateSchema)
  }
}
