const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const joi = require('Joi')
const router = express.Router()
const Notification = require('../../Models/Notification')
const validator = require('../../Validation/notificationValid')

router.get('/', async (req, res) => {
  const notifications = await Notification.find()
  res.json({ data: notifications })
})

router.post('/', async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const notification = await new Notification({

      _id: mongoose.Types.ObjectId(),
      text: req.body.text,
      date: Date.now(),
      recipient: req.body.recipient,
      trigger: req.body.trigger

    }).save()
    return res.json({ data: notification })
  } catch (error) {
    // We will be handling the error later
    console.log(error)
  }
})

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
      const notification = await Notification.findById(request.params.id).exec()
      return response.json({ data: notification })
    } catch (err) {
      return response.json({ error: `Error, couldn't find a notification given the following id` })
    }
  })

  .delete((request, response) => {
    Notification.findByIdAndDelete(request.params.id, (err, model) => {
      if (!err) {
        return response.json('Notification Deleted')
      } else {
        return response.json({ error: `Error, couldn't delete a notification given the following data` })
      }
    })
  })

module.exports = router
