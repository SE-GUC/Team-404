
const Joi = require('joi')

module.exports = {
    createValidation: request => {
      const createSchema = {
        
        name: Joi.string().required(),  
        email: Joi.string().required(),
        password: Joi.string().required(),
        age: Joi.number().required(),
        username: Joi.string().required(),
        phonenumber:Joi.number().required(),
        usertype: Joi.string().required(),
        location: Joi.string().required(),
        board: Joi.array().required(),
        pastEvents: Joi.array(),
        reports: Joi.array(),
      }
  
      return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().required(),  
            email: Joi.string().required(),
            password: Joi.string().required(),
            age: Joi.number().required(),
            username: Joi.string().required(),
            phonenumber:Joi.number().required(),
            usertype: Joi.string().required(),
            location: Joi.string().required(),
            board: Joi.array(),
            pastEvents: Joi.array(),
            reports: Joi.array(),
        }
    
        return Joi.validate(request, updateSchema)
    }

}