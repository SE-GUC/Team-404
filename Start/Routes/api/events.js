const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const app = express()
const joi = require('joi')


// We will be connecting using database 
const Event = require('../../Models/Event')
const validator = require('../../Validation/eventValidation')


router.get('/', async (req,res) => {
    const events = await Event.find()
    res.json({data: events})
})


// Default route (entry point)
app.get('/', (req, res) => {
  res.send(`<h1>Welcome</h1>`)
})

// Create a new newEvent 
router.post("/", (req,res)=>{
  if (!req.body) {
      return res.status(400).send("Body is missing")
  }
  try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
  }
    catch (error) {
      console.log(error)
    }
  let newEvent = new Event(req.body)
  newEvent.save()
  .then((doc) => {
  if (!doc || doc.length ==0)
  {
    return res.status(500).send(doc)
  }
  res.status(201).send(doc)
})
.catch((err)=>{
  res.status(500).json(err)
})
})


// Update event 
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
    Event.findByIdAndUpdate(request.params.id, request.body, { new: true }, (err, model) => {
      if (!err) {
        return response.json({ data: model })
      } else {
        return response.json({ error: `Error, couldn't update event` })
      }
    })
  })

// Delete newEvent 
router.delete('/:id', async (req, res) => {
    try{
       const id = req.params.id
       const deletedEvent = await Event.findByIdAndRemove(id)
       res.json({message:'Event was deleted successfully'})
    }
    catch (error){
       console.log(error)
    }
})

module.exports = router 

