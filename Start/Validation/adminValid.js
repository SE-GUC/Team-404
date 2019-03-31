const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(500).required(),
            email: Joi.string().min(10).max(500).required(),
            password: Joi.string().min(8).max(80).required(),
            age: Joi.number().min(1).max(300).required(),
            username: Joi.string().min(3).max(500).required(),
            phonenumber: Joi.number().min(11).required(),
            usertype: Joi.string().min(3).max(500).required(),
            location: Joi.string().min(3).max(500).required()
        }

        return Joi.validate(request, createSchema)
    },

    updatValidation: request => {
        const updateSchema = {

            name: Joi.string().min(3).max(500),
            email: Joi.string().min(10).max(500),
            password: Joi.string().min(8).max(80),
            age: Joi.number().min(1).max(300),
            username: Joi.string().min(3).max(500),
            phonenumber: Joi.number().min(1).max(300),
            usertype: Joi.string().min(3).max(500),
            location: Joi.string().min(3).max(500)

        }

        return Joi.validate(request, updateSchema)
    }, 
}
