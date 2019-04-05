const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            reuestid: Joi.string().min(3).max(500).required(),
            partnerid:Joi.string().min(3).max(500).required(),
            eventname: Joi.string().min(3).max(500).required(),
            organizer: Joi.string().min(3).max(500).required(),
            location: Joi.string().min(8).max(80).required(),
            description: Joi.string().min(1).max(300).required(),
            remainingplaces: Joi.number().min(3).max(500).required(),
            speakers: Joi.string().min(11).required(),
            maximumplaces: Joi.number().min(3).max(500).required(),
            topicscovered: Joi.string().min(3).max(500).required(),
            feedbackid: Joi.number().min(3).max(500).required(),
            field: Joi.string().min(3).max(500).required(),
            registrationprice: Joi.number().min(3).max(500).required(),
            approvalstatus: Joi.string().min(6).max(500).required()
        }

        return Joi.validate(request, createSchema)
    } 
}
