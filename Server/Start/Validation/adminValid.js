const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(500).required(),
            email: Joi.string().min(10).max(500).required(),
            password: Joi.string().min(5).max(80).required(),
            age: Joi.number().min(2).max(300).required(),
            username: Joi.string().min(2).max(500).required(),
            phonenumber: Joi.number().min(11).required(),
        }

        return Joi.validate(request, createSchema)
    },

    updatValidation: request => {
        const updateSchema = {

            name: Joi.string().min(3).max(500),
            email: Joi.string().min(10).max(500),
            password: Joi.string().min(5).max(80),
            age: Joi.number().min(2).max(300),
            username: Joi.string().min(2).max(500),
            phonenumber: Joi.number().min(11).max(300),
        

        }

        return Joi.validate(request, updateSchema)
    }, 
}
