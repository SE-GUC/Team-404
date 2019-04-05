
const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            eventname: Joi.string().required(),
            organizer: Joi.string().required(),
            location: Joi.string().required(),
            description: Joi.string().required(),
            remainingplaces: Joi.number().required(),
            speakers: Joi.string().required(),
            maximumplaces: Joi.number().required(),
            topicscovered: Joi.string().required(),
            feedbackid: Joi.number().required(),
            field: Joi.string().required(),
            registrationprice: Joi.number().required(),
            approvalstatus: Joi.string().required()
    
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().required(),
            organizer: Joi.string().required(),
            location: Joi.string().required(),
            description: Joi.string().required(),
            remainingplaces: Joi.number().required(),
            speakers: Joi.string().required(),
            maximumplaces: Joi.number().required(),
            topicscovered: Joi.string().required(),
            feedbackid: Joi.number().required(),
            field: Joi.string().required(),
            approvalstatus: Joi.string().required()
    
        }

        return Joi.validate(request, updateSchema)
    }, 
}