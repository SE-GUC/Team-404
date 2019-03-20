const Joi = require('joi')

module.exports = {
  createValidation: request => {
    const createSchema = {
      _id: Joi.string(),
      candidate: Joi.string().required(),
      partner: Joi.string().required(),
      task: Joi.number().required(),
      status: Joi.string()
    }

    return Joi.validate(request, createSchema)
  },

  updateValidation: request => {
    const updateSchema = {
      candidate: Joi.string(),
      partner: Joi.string(),
      task: Joi.number(),
      status: Joi.string()
    }

    return Joi.validate(request, updateSchema)
  }
}
