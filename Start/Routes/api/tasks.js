// routings for task
const mongoose = require('mongoose')
const express = require('express')
const app = express()
app.use(express.json())
const router = express.Router()
//const uuid = require('uuid')
const Task = require('../../Models/Task')
const authenticateUser = require('../../middleware/authenticate')
//const joi = require("Joi")

const validator = require('../../Validation/taskValid')


router.get('/', authenticateUser,async (req, res) => {
  const tasks = await Task.find()
  res.json({ data: tasks })
})


router.post('/', authenticateUser ,async (req, res) => {

try {
    const isValidated = validator.createValidation(req.body)
  if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
  const task = await new Task({
    _id: mongoose.Types.ObjectId(),
       description: req.body.description,
     eta: req.body.eta,
        levelOfCommitment: req.body.levelOfCommitment,
        partner: req.body.partner,
        monetaryCompensation: req.body.monetaryCompensation,
        skills: req.body.skills,
        lifeCycleStatus: req.body.lifeCycleStatus,
        experienceNeeded: req.body.experienceNeeded,
        consultancyRequested: req.body.consultancyRequested,
         }).save()

         return res.json({ data: task })

  } catch (error) {
    console.log(error)
  } })


  router
  .route('/:id',authenticateUser)
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
      const task = await Task.findById(request.params.id).exec()
      return response.json({ data: Task })
    } catch (err) {
      return response.json({ error: `Error, couldn't find a task given the following id` })
    }
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
        return response.json({ data: null })
      } else {
        return response.json({ error: `Error, couldn't delete a Task given the following data` })
      }
    })
  })

module.exports = router