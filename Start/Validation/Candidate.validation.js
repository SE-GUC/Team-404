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
            skills: Joi.string().min(3).max(20).required(),
            interests: Joi.string().min(3).max(20).required(),
            pasteventsandtasks: Joi.string().min(3).max(20).required(),
            reviewsrecieved: Joi.string().min(3).max(20).required()
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
            skills: Joi.string().min(3).max(20).required(),
            interests: Joi.string().min(3).max(20).required(),
            pasteventsandtasks: Joi.string().min(3).max(20).required(),
            reviewsrecieved: Joi.string().min(3).max(20).required()
        }


        return Joi.validate(request, updateSchema)
    }, 
}