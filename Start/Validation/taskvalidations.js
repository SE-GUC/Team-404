const Joi = require('joi')

module.exports = {
  createValidation: request => {
    const createSchema = {
        Description:            Joi.string().required(),           
        eta:                    Joi.number().required(),
        levelofcommitment:      Joi.string().required(),     
        partner:                Joi.string().required(),              
        monetarycompensation:   Joi.number().required(),
        skills:                 Joi.string().required(),                
        lifecyclestatus:        Joi.string().required(),      
        experienceneeded:       Joi.string().required(),      
        consultancy:            Joi.string().required()       
    }

    return Joi.validate(request, createSchema)
  }
}

  module.exports = {
    updateValidation: request => {
      const updateSchema = {
        Description: Joi.string(),
        eta: Joi.number(),
        levelofcommitment: Joi.string(),
        partner: Joi.string(),
        monetarycompensation: Joi.number(),
        skills: Joi.string(),
        lifecyclestatus: Joi.string(),
        experienceneeded: Joi.string(),
        consultancy: Joi.string()
      }
  
      return Joi.validate(request, updateSchema)
    }
  }
  
  

