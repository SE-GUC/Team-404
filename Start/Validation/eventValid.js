const Joi = require("joi");

module.exports = {
  createValidation: request => {
    const createSchema = {
      eventName: Joi.string()
        .min(3)
        .max(500)
        .required(),
      organizer: Joi.string()
        .min(3)
        .max(500),
      location: Joi.string()
        .min(3)
        .max(500)
        .required(),
      description: Joi.string()
        .min(3)
        .max(500)
        .required(),
      remainingPlaces: Joi.number()
        .min(1)
        .max(500)
        .required(),
      speakers: Joi.string()
        .min(3)
        .max(500)
        .required(),
      maximumPlaces: Joi.number()
        .min(1)
        .max(500)
        .required(),
      topicsCovered: Joi.string()
        .min(3)
        .max(500)
        .required(),
      field: Joi.string()
        .min(3)
        .max(500)
        .required(),
      registrationPrice: Joi.number()
        .min(1)
        .max(500)
        .required(),
      approvalStatus: Joi.string()
        .min(3)
        .max(500),
      applicants: Joi.array(),
      feedback: Joi.array()
    };

    return Joi.validate(request, createSchema);
  },

  updateValidation: request => {
    const updateSchema = {
      eventName: Joi.string()
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
      remainingPlaces: Joi.string()
        .min(1)
        .max(500)
        .required(),
      speakers: Joi.string()
        .min(3)
        .max(500)
        .required(),
      maximumPlaces: Joi.string()
        .min(1)
        .max(500)
        .required(),
      topicsCovered: Joi.string()
        .min(3)
        .max(500)
        .required(),
      field: Joi.string()
        .min(3)
        .max(500)
        .required(),
      registrationPrice: Joi.string()
        .min(1)
        .max(500)
        .required(),
      approvalStatus: Joi.string()
        .min(3)
        .max(500),
      applicants: Joi.array(),
      feedback: Joi.array()
    };

    return Joi.validate(request, updateSchema);
  }
};
