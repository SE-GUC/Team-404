const Joi = require('joi')

module.exports = {
  createValidation: request => {
    const createSchema = {
      // _id:        Joi.string,
      text: Joi.string().max(500).required(),
      recipient: Joi.string().required(),
      trigger: Joi.string().required()
    }
    return Joi.validate(request, createSchema)
  }
}
