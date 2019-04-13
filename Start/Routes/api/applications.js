const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const app = express()
//const joi = require('Joi')
// const uuid = require('uuid/v4');
// We will be connecting using database
const Application = require('../../Models/Application')

const validator = require('../../Validation/applicationValid')

router.get('/', async (req, res) => {
  const applications = await Application.find()
  res.json({ data: applications })
})

// if anything is similar it refuses to post, even if not duplicates
router.post('/', async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const application = await new Application({
      _id: mongoose.Types.ObjectId(),
      candidate: req.body.candidate,
      partner: req.body.partner,
      task: req.body.task,
      status: 'pending',
      datetime: Date.now()
    }).save()
    return res.json({ data: application })

    // const newApplication = await new Application
    // res.json({ msg: 'Application was created successfully', data: newApplication })
  } catch (error) {
    // We will be handling the error later
    console.log(error)
  }
})

// all of this is working fine, getid put delete
router
  .route('/:id')
  .all(async (request, response, next) => {
    const status = joi.validate(request.params, {
      id: joi.string().length(24).required()
    })
    if (status.error) {
      return response.json({ error: status.error.details[0].message })
    }
    next()
  })

  .get(async (request, response) => {
    try {
      const application = await Application.findById(request.params.id).exec()
      return response.json({ data: application })
    } catch (err) {
      return response.json({ error: `Error, couldn't find a application given the following id` })
    }
  })

  .put(async (request, response) => {
    Application.findByIdAndUpdate(request.params.id, request.body, { new: true }, (err, model) => {
      if (!err) {
        return response.json({ data: model })
      } else {
        return response.json({ error: `Error, couldn't update a application given the following data` })
      }
    })
  })

  .delete((request, response) => {
    Application.findByIdAndDelete(request.params.id, (err, model) => {
      if (!err) {
        return response.json({ data: null })
      } else {
        return response.json({ error: `Error, couldn't delete a application given the following data` })
      }
    })
  })

module.exports = router

// 9 to 11:25
// 8:30 to 9:50
