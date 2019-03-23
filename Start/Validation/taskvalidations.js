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
  },

 

    return Joi.validate(request, updateSchema)
  }
}
