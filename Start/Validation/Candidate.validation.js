const Joi = require('joi')
module.exports = {
    createValidation: request => {
        const createSchema = {
            skills: Joi.string().min(3).max(20).required(),
            interests: Joi.string().min(3).max(20).required(),
            pastEvents: Joi.array().required(),
            pastTasks: Joi.array().required(),
            reviewsreceived: Joi.string().min(3).max(20).required(),
            certificatesAndMasterclass: Joi.string().min(3).max(20).required()

        }

        return Joi.validate(request, createSchema)
    },


    updateValidation: request => {
        const updateSchema = {
            
            skills: Joi.string().min(3).max(20).required(),
            interests: Joi.string().min(3).max(20).required(),
            pastEvents: Joi.array().required(),
            pastTasks: Joi.array().required(),
            reviewsreceived: Joi.string().min(3).max(20).required(),
            certificatesAndMasterclass: Joi.string().min(3).max(20).required()
        }


        return Joi.validate(request, updateSchema)
    }, 
}