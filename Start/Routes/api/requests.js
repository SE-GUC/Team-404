const express = require('express')  
const router = express.Router()
const mongoose = require('mongoose')
const app = express()
const joi = require('joi')


// We will be connecting using database 
const Request = require('../../Models/Request')
const validator = require('../../Validation/requestValid')

// View requests
router.get('/', async (req,res) => {
    const requests = await Request.find()
    res.json({data: requests})
})


// Default route (entry point)
app.get('/', (req, res) => {
  res.send(`<h1>Welcome</h1>`)
})

// Create a request 
  router.post('/', async (req, res) => {
    try {
      const isValidated = validator.createValidation(req.body)
      if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
      const request = await new Request({
        requestid: req.body.requestid,
        partnerid: req.body.partnerid,
        eventname: req.body.eventname,
        organizer: req.body.organizer,
        location: req.body.location,
        description: req.body.description,
        remainingplaces: req.body.remainingplaces,
        speakers: req.body.speakers,
        maximumplaces: req.body.maximumplaces,
        topicscovered: req.body.topicscovered,
        feedbackid: req.body.feedbackid,
        field: req.body.field,
        registrationprice: req.body.field,
        approvalstatus: 'pending'
      }).save()
      return res.json({ data: request})
  
    
    } catch (error) {
      // We will be handling the error later
      console.log(error)
    }
  })

  // Delete request 
router.delete('/:id', async (req, res) => {
    try{
       const id = req.params.id
       const deletedRequest = await Request.findByIdAndRemove(id)
       res.json({message:'Request was deleted successfully'})
    }
    catch (error){
       console.log(error)
    }
})



module.exports = router 