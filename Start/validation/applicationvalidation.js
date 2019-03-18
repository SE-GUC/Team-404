const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema ={
            candidate:Joi.string().min(3).max(100).required(),
            partner:Joi.Joi.string().min(3).max(100).required(),
            datetime:Joi.date(),
            status: Joi.string(),
            task:Joi.string().min(3).max(300).required(),
            account_no:Joi.number().min(3).max(100).required(),

        }
        return Joi.validate(request , createSchema);
    },

    updateValidation: request => {
        const updateSchema ={
            candidate:Joi.string().min(3).max(100).required(),
            partner:Joi.Joi.string().min(3).max(100).required(),
            datetime:Joi.date(),
            status: Joi.string(),
            task:Joi.string().min(3).max(300).required(),
            account_no:Joi.number().min(3).max(100).required(),

        }
        return Joi.validate(request , updateSchema);
    }
}