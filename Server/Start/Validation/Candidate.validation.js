const Joi = require('joi')
module.exports = {
    createValidation: request => {
        const createSchema = {
            age: Joi.number().min(1).max(200).required(),
            skills: Joi.string().min(3).max(20).required(),
            interests: Joi.string().min(3).max(20).required(),
            pasteventsandtasks: Joi.string().min(3).max(20).required(),
            reviewsrecieved: Joi.string().min(3).max(20).required()
        }

        return Joi.validate(request, createSchema)
    },


    updateValidation: request => {
        const updateSchema = {
            age: Joi.number().min(1).max(200).required(),
            skills: Joi.string().min(3).max(20).required(),
            interests: Joi.string().min(3).max(20).required(),
            pasteventsandtasks: Joi.string().min(3).max(20).required(),
            reviewsrecieved: Joi.string().min(3).max(20).required()
        }


        return Joi.validate(request, updateSchema)
    }, 
}