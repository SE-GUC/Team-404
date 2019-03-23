
const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(500).required(),
            email: Joi.string().min(10).max(500).required(),
            password: Joi.string().min(8).max(80).required(),
            age: Joi.number().min(1).max(300).required(),
            username: Joi.string().min(3).max(500).required(),
            phonenumber: Joi.string().min(11).max(300).required(),
            usertype: Joi.string().min(3).max(500).required(),
            location: Joi.string().min(3).max(500).required()
        }

        return Joi.validate(request, createSchema)
    },

    updatValidation: request => {
        const updateSchema = {
            name: Joi.string().min(3).max(500).required(),
            email: Joi.string().min(10).max(500).required(),
            password: Joi.string().min(8).max(80).required(),
            age: Joi.number().min(1).max(300).required(),
            username: Joi.string().min(3).max(500).required(),
            phonenumber: Joi.String().min(1).max(300).required(),
            usertype: Joi.string().min(3).max(500).required(),
            location: Joi.string().min(3).max(500).required()
        }

        return Joi.validate(request, updateSchema)
    }, 
}