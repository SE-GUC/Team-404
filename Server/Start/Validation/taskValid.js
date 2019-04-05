const Joi = require('joi')

module.exports = {
  updateValidation: request => {
    const updateSchema = {
      Description: Joi.string(),
      eta: Joi.number(),
      levelofcommitment: Joi.string(),
      partner: Joi.string(),
      monetarycompensation: Joi.number(),
      skills: Joi.string(),
      lifecyclestatus: Joi.string(),
      experienceneeded: Joi.string(),
      consultancy: Joi.string()
    }

    return Joi.validate(request, updateSchema)
  }
}
