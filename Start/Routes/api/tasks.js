const express = require('express')
const app = express()
app.use(express.json())
const router = express.Router()
const Task = require('../../Models/Task')
const joi = require('Joi')
const mongoose = require('mongoose')
const validator = require('../../Validation/taskValid')

router.get('/', async (req, res) => {
  const tasks = await Task.find()
  res.json({ data: tasks })
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
  .put(async (request, response) => {
    Task.findByIdAndUpdate(request.params.id, request.body, { new: true }, (err, model) => {
      if (!err) {
        return response.json({ data: model })
      } else {
        return response.json({ error: `Error, couldn't update a Task given the following data` })
      }
    })
  })
  .delete((request, response) => {
    Task.findByIdAndDelete(request.params.id, (err, model) => {
      if (!err) {
        return response.json('Task Deleted')
      } else {
        return response.json({ error: `Error, couldn't delete a Task given the following data` })
      }
    })
  })

module.exports = router
