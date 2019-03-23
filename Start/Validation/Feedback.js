const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            event: Joi.string().required(),
            response: Joi.string().min(5).max(200).required(),
            name: Joi.string().required(),
        
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            event: Joi.string(),
            response: Joi.string().min(20).max(200),
            name: Joi.string()
        }

        return Joi.validate(request, updateSchema)
    }, 
}