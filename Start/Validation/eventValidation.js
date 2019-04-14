const Joi = require("joi");

module.exports = {
<<<<<<< HEAD
    createValidation: request => {
        const createSchema = {
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
=======
  createValidation: request => {
    const createSchema = {
      eventname: Joi.string()
        .min(3)
        .max(500)
        .required(),
      organizer: Joi.string()
        .min(3)
        .max(500)
        .required(),
      location: Joi.string()
        .min(3)
        .max(500)
        .required(),
      description: Joi.string()
        .min(3)
        .max(500)
        .required(),
      remainingplaces: Joi.number()
        .min(1)
        .max(500)
        .required(),
      speakers: Joi.string()
        .min(3)
        .max(500)
        .required(),
      maximumplaces: Joi.number()
        .min(2)
        .max(500)
        .required(),
      topicscovered: Joi.string()
        .min(3)
        .max(500)
        .required(),
      field: Joi.string()
        .min(3)
        .max(500)
        .required(),
      registrationprice: Joi.number()
        .min(2)
        .max(500)
        .required(),
      approvalstatus: Joi.string()
        .min(3)
        .max(500)
        .required(),
      applicants: Joi.array(),
      feedback: Joi.array()
    };
>>>>>>> react_dev

    return Joi.validate(request, createSchema);
  },

<<<<<<< HEAD
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
=======
  updateValidation: request => {
    const updateSchema = {
      eventname: Joi.string()
        .min(3)
        .max(500)
        .required(),
      organizer: Joi.string()
        .min(3)
        .max(500)
        .required(),
      location: Joi.string()
        .min(3)
        .max(500)
        .required(),
      description: Joi.string()
        .min(3)
        .max(500)
        .required(),
      remainingplaces: Joi.string()
        .min(1)
        .max(500)
        .required(),
      speakers: Joi.string()
        .min(3)
        .max(500)
        .required(),
      maximumplaces: Joi.string()
        .min(2)
        .max(500)
        .required(),
      topicscovered: Joi.string()
        .min(3)
        .max(500)
        .required(),
      field: Joi.string()
        .min(3)
        .max(500)
        .required(),
      registrationprice: Joi.string()
        .min(2)
        .max(500)
        .required(),
      approvalstatus: Joi.string()
        .min(3)
        .max(500)
        .required(),
      applicants: Joi.array(),
      feedback: Joi.array()
    };
>>>>>>> react_dev

    return Joi.validate(request, updateSchema);
  }
};
