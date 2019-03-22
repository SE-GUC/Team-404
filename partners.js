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
router.post('/', async (req,res) => {
  try {
   const isValidated = validator.createValidation(req.body)
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   const newPartner = await Partner.create(req.body)
   res.json({msg:'Partner was created successfully', data: newPartner})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})
//read
router.get(async (request, response) => {
  try {
    const partner = await Partner.findById(request.params.id).exec()
    return response.json({ data: partner })
  } catch (err) {
    return response.json({ error: `Error, couldn't find a partner given the following id` })
  }
})
//update
router.put('/:id', async (req,res) => {
  try {
   const id = req.params.id
   const partner = await Partner.findOne({id})
   if(!partner) return res.status(404).send({error: 'Partner does not exist'})
   const isValidated = validator.updateValidation(req.body)
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   const updatedPartner = await Partner.updateOne(req.body)
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
