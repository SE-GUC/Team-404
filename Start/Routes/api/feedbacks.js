const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const app = express();
const joi = require('joi')

// We will be connecting using database 
const Feedback = require('../../Models/Feedback')
const Validator = require('../../Validation/Feedback')

// Get method

router.get('/', async (req, res) => {
  const feedbacks = await Feedback.find()
  res.json({ data: feedbacks })
})

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
      const feedback = await Feedback.findById(request.params.id).exec()
      return response.json({ data: feedback })
    } catch (err) {
      return response.json({ error: `Error, couldn't find a application given the following id` })
    }
  })

// Create a feedback

router.post('/' ,async(req,res)=>
{
    try{
        const isValidated = Validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({error: isValidated.error.details[0].message})
        const newFeedback = await Feedback.create(req.body)
        res.json({msg:'Feedback was created successfully', data: newFeedback})
       }
       catch(error)
       {
           console.log(error)
       }
})

//Update a feedback

router.put('/:id',async (req,res)=>{
    try{
        Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, model) => {
          if (!err) {
            return res.json({ data: model })
          } else {
            return res.json({ error: `Error, couldn't update an application given the following data` })
          }
        })
    }
    catch(error)
    {
        console.log(error)
    }
})

//Delete a feedback
router.delete('/:id' , async (req,res)=> {
    try {
        const id = req.params.id
        const deletedFeedback = await Feedback.findByIdAndRemove(id)
        res.json({msg:'Feedback was deleted successfully',data : deletedFeedback})
    }
    catch(error)
    {
        console.log(error)
    }
})
module.exports = router




