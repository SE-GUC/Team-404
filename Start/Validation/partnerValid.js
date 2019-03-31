
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
      organisationname: Joi.string().required(),
      partnerss: Joi.string(),
      boardmembers: Joi.string().required(),
      eventsorganized: Joi.string(),
      fieldofwork: Joi.string().required(),
      projecthistory: Joi.string(),
      feedbackform: Joi.string(),
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
      organisationname: Joi.string(),
        partnerss: Joi.string(),
        boardmembers: Joi.string(),
        eventsorganized: Joi.string(),
        fieldofwork: Joi.string(),
        projecthistory: Joi.string(),
        feedbackform: Joi.string(),
    }

    return Joi.validate(request, updateSchema)
  }

}