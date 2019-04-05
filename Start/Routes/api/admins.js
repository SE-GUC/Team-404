const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const app = express()
const joi = require("Joi")
const axios = require('axios');



// We will be connecting using database 
const Admin = require('../../Models/Admin')
const validator = require('../../Validation/adminValid')

// View admins
router.get('/', async (req,res) => {
  const admins = await Admin.find()
  res.json({data: admins})
})

// Default route (entry point)
app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
  })

// Create admin
router.post('/', async (req,res) => {
  try{
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })

   
    const newAdmin = await new Admin({
            name: req.body.name,
            password: req.body.password, //hashedPassword ,
            email: req.body.email,
            age: req.body.age,
            username: req.body.username,
            phonenumber: req.body.phonenumber,
            usertype:req.body.usertype,
            location: req.body.location
        })

    .save()
    return res.json({ data: newAdmin })
  }
  catch(error){

    console.log(error)
  }
    

      
})
// Update admin
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
    Admin.findByIdAndUpdate(request.params.id, request.body, { new: true }, (err, model) => {
      if (!err) {
        return response.json({ data: model })
      } else {
        return response.json({ error: `Error, couldn't update admin` })
      }
    })
  })


// Delete admin
router.delete('/:id', async (req,res) => {
  try {
   const id = req.params.id
   const deletedAdmin = await Admin.findByIdAndRemove(id)
   res.json({msg:'Admin was deleted successfully', data: deletedAdmin})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})

//////////


module.exports = router
