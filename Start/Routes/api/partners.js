const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const app = express()
const joi = require("Joi")

const Partner = require('../../Models/Partner')
const validator = require('../../Validation/partnerValid')
//view all
router.get('/', async (req, res) => {
  const Partners = await Partner.find()
  res.json({ data: Partners })
})
//create
router.post('/', async (req, res) => {

  try {
      const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const partner = await new Partner({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      age: req.body.age,
      username: req.body.username,
      phonenumber: req.body.phonenumber,
      usertype:req.body.usertype,
      location: req.body.location,
      organisationname: req.body.organisationname,
      partners: req.body.partners,
      boardmembers: req.body.boardmembers,
      eventsorganized: req.body.eventsorganized,
      fieldofwork: req.body.fieldofwork,
      projecthistory: req.body.projecthistory,
      feedbackform: req.body.feedbackform,
           }).save()
  
           return res.json({ data: partner })
  
    } catch (error) {
      console.log(error)
    } })
//read
router.get("/:id" ,async (request, response) => {
  try {
    const partners = await Partner.findById(request.params.id).exec()
    return response.json({ data: partners })
  } catch (err) {
    return response.json({ error: `Error, couldn't find a partner given the following id` })
  }
})
//update
router.put('/:id', async (req,res) => {
  try {
   const id = req.params.id
   const requestedPartner = await Partner.findById({id})
   res.json({msg:'Candidate you asked for', data: requestedPartner})
   res.json({msg: 'Partner updated successfully'})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})
//delete
router.delete('/:id', async (req,res) => {
  try {
   const id = req.params.id
   const deletedPartner = await Partner.findByIdAndRemove(id)
   res.json({msg:'Partner was deleted successfully', data: deletedPartner})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})
module.exports = router
