const express = require('express');
const router = express.Router();
const app = express()
const joi = require("Joi")
const validator = require('../../Validation/consultantValid')
const Consultant = require('../../Models/Consultant');
const mongoose = require('mongoose')




//read
router.get('/', async (req, res) => {
    const consultants = await Consultant.find()
    res.json({ data: consultants })
  })


//create
router.post('/', async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const consultant = await new Consultant({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      age: req.body.age,
      username: req.body.username,
      phonenumber: req.body.phonenumber,
      usertype:req.body.usertype,
      location: req.body.location,
      board: req.body.board,
      pastEvents: req.body.pastEvents,
      reports: req.body.reports
    }).save()
    return res.json({ data: consultant })
  } catch (error) {
    // We will be handling the error later
    console.log(error)
  }
})
  


router.route('/:id')
.all(async (request, response, next) => {
  const status = joi.validate(request.params, {
    id: joi.string().length(24).required()
  })
  if (status.error) {
    return response.json({ error: status.error.details[0].message })
  }
  next()
})
//get
router.get(async (request, response) => {
  try {
    const consultant = await Consultant.findById(request.params.id).exec()
    return response.json({ data: consultant })
  } catch (err) {
    return response.json({ error: `Error, couldn't find a consultant given the following id` })
  }
})

router.route('/:id').delete((request, response) => {
  Consultant.findByIdAndDelete(request.params.id, (err, model) => {
    if (!err) {
      return response.json('Deleted')
    } else {
      return response.json({ error: `Error, couldn't delete a application given the following data` })
    }
  })
})

router.route('/:id').get(async (request, response) => {
  try {
    const consultant = await Consultant.findById(request.params.id).exec()
    return response.json({ data: consultant })
  } catch (err) {
    return response.json({ error: `Error, couldn't find a consultant given the following id` })
  }
})

/*
router.delete('/:id', async (req,res) => {
  try {
    const id = req.params.id
    const consultant = await Consultant.find({id})
    if(!consultant) return res.status(404).send({error: 'Consultant does not exist'})
    const deletedConsultant = await Consultant.deleteOne({id})
    res.json({msg:'consultant was deleted successfully', data: deletedConsultant})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})



  //update
 /*router.put('/:id',async (request, response) => {
    const id = req.params.id
    Consultant.findByIdAndUpdate(id, request.body, { new: true }, (err, model) => {
      if (!err) {
        return response.json({ data: model })
      } else {
        return response.json({ error: `Error, couldn't update a consultant given the following data` })
      }
    })
  })*/

  router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const consultant = await Consultant.find({id})
     if(!consultant) return res.status(404).send({error: 'Consultant does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedConsultant = await Consultant.updateOne(req.body)
     res.json({msg: 'Consultant updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })


module.exports = router