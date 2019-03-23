const Joi = require('joi')

module.exports = {
    createValidation: request => {
      const createSchema = {
        _id: Joi.string(),
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        board: Joi.array().required(),
        pastEvents: Joi.array(),
        reports: Joi.array(),
      }
  
      return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            _id: Joi.string(),
            name: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required(),
            board: Joi.string().required(),
            pastEvents: Joi.string(),
            reports: Joi.string(),
        }
    
        return Joi.validate(request, updateSchema)
    }
}