const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            reuestid: Joi.string().min(1).max(500).required(),
            partnerid:Joi.string().min(1).max(500).required(),
            eventname: Joi.string().min(3).max(500).required(),
            organizer: Joi.string().min(3).max(500).required(),
            location: Joi.string().min(3).max(500).required(),
            description: Joi.string().min(3).max(500).required(),
            remainingplaces: Joi.string().min(1).max(500).required(),
            speakers: Joi.string().min(3).max(500).required(),
            maximumplaces: Joi.string().min(2).max(500).required(),
            topicscovered: Joi.string().min(3).max(500).required(),
            field: Joi.string().min(3).max(500).required(),
            registrationprice: Joi.string().min(2).max(500).required(),
            approvalstatus: Joi.string().min(3).max(500).required()
        }

        return Joi.validate(request, createSchema)
    } 
}
