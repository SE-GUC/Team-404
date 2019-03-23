const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            event: Joi.string().required(),
            response: Joi.string().min(20).max(200).required(),
            name: Joi.string().required(),
        
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            event: Joi.string().required(),
            response: Joi.string().min(20).max(200).required(),
            name: Joi.string().required(),
        }

        return Joi.validate(request, updateSchema)
    }, 
}