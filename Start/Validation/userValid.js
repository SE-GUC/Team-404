
const Joi = require('joi')

module.exports = {
    registerValidation: request => {
        const registerSchema = {
            name: Joi.string().min(2).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            age: Joi.number()
        }

        return Joi.validate(request, registerSchema)
    },

    loginValidation: request => {
        const LoginSchema = {
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }
        return Joi.validate(request, LoginSchema)
    }
}

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(500).required(),
            email: Joi.string().min(10).max(500).required(),
            password: Joi.string().min(8).max(80).required(),
            age: Joi.number().min(1).max(300).required(),
            username: Joi.string().min(3).max(500).required(),
            phoneNumber: Joi.number().min(1).max(99999999999999).required(),
            userType: Joi.string().min(3).max(500).required(),
            location: Joi.string().min(3).max(500).required(),
            skills: Joi.string().min(3).max(20),
            interests: Joi.string().min(3).max(20),
            pasteventsAndTasks: Joi.string().min(3).max(20),
            reviewsRecieved: Joi.string().min(3).max(20),
            organisationName: Joi.string(),
            businessPartners: Joi.string(),
            boardMembers: Joi.string(),
            eventsOrganized: Joi.string(),
            fieldOfWork: Joi.string(),
            projectHistory: Joi.string(),
            board: Joi.array(),
            pastEvents: Joi.array(),
            reports: Joi.array()
            
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
            phoneNumber: Joi.number().min(1).max(99999999999999).required(),
            userType: Joi.string().min(3).max(500).required(),
            location: Joi.string().min(3).max(500).required(),
            skills: Joi.string().min(3).max(20),
            interests: Joi.string().min(3).max(20),
            pasteventsAndTasks: Joi.string().min(3).max(20),
            reviewsRecieved: Joi.string().min(3).max(20),
            organisationName: Joi.string(),
            businessPartners: Joi.string(),
            boardMembers: Joi.string(),
            eventsOrganized: Joi.string(),
            fieldOfWork: Joi.string(),
            projectHistory: Joi.string(),
            board: Joi.array(),
            pastEvents: Joi.array(),
            reports: Joi.array()
            
        }

        return Joi.validate(request, updateSchema)
    }, 
}