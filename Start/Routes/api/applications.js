const express = require('express')
const mongoose= require('mongoose');
const router = express.Router()
const app = express()
const validator = require('../../validation/applicationvalidation')

// We will be connecting using database 
const Application = require('../../Models/Application')


router.get('/', async (req,res) => {
    const applications = await Application.find()
    res.json({data: applications})
})

app.use(express.json())
// temporary data created as if it was pulled out of the database ...

router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newApplication = await Application.create(req.body)
     res.json({msg:'Application was created successfully', data: newApplication})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
 
 // Update a book
 router.put('/:id', async (req,res) => {
     try {
      const id = req.params.id
      const application = await Application.findOne({id})
      if(!application) return res.status(404).send({error: 'Book does not exist'})
      const isValidated = validator.updateValidation(req.body)
      if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
      const updatedApplication = await Application.updateOne(req.body)
      res.json({msg: 'Application updated successfully'})
     }
     catch(error) {
         // We will be handling the error later
         console.log(error)
     }  
  })
 
  router.delete('/:id', async (req,res) => {
     try {
      const id = req.params.id
      const deletedApplication = await Application.findByIdAndRemove(id)
      res.json({msg:'Application was deleted successfully', data: deletedApplication})
     }
     catch(error) {
         // We will be handling the error later
         console.log(error)
     }  
  })
 
  

module.exports = router

//9 to 11:25
//8:30 to 9:50
