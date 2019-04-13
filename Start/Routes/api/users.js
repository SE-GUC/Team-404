const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const joi = require("Joi")
const User = require('../../Models/User')
const validator = require('../../Validation/userValid')

//get All
router.get('/', async (req,res) => {
  const users = await User.find()
  res.json({data: users})
})

router.post('/', async (req,res) => {
  try{
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })

   // const user = await User.findOne({email})
    //if(user) return res.status(400).json({error: 'Email already exists'})
    //const user1 = await User.findOne({username})
    //if(user1) return res.status(400).json({error: 'username already exists'})

    
    //const salt = bcrypt.genSaltSync(10)
    //const hashedPassword = bcrypt.hashSync(password,salt)
    const newUser = await new User({
            name: req.body.name,
            password: req.body.password, //hashedPassword ,
            email: req.body.email,
            age: req.body.age,
            username: req.body.username,
            phoneNumber: req.body.phoneNumber,
            userType:req.body.userType,
            location: req.body.location,
            skills: req.body.skills,
            interests: req.body.interests,
            pastEventsAndTasks: req.body.pastEventsAndTasks,
            reviewsRecieved: req.body.reviewsRecieved,
            board: req.body.board,
            pastEvents: req.body.pastEvents,
            reports: req.body.reports,
            organisationName: req.body.organisationName,
            businessPartners: req.body.businessPartners,
            eventsOrganized: req.body.eventsOrganized,
            fieldOfWork:req.body.fieldOfWork,
            projectHistory: req.body.projectHistory
        })

    .save()
    return res.json({ data: newUser })
  }
  catch(error){

    console.log(error)
  }
    

      
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
    User.findByIdAndUpdate(request.params.id, request.body, { new: true }, (err, model) => {
      if (!err) {
        return response.json({ data: model })
      } else {
        return response.json({ error: `Error, couldn't update user` })
      }
    })
  })


//Done with delete.
router.delete('/:id', async (req,res) => {
  try {
   const id = req.params.id
   const deletedUser = await User.findByIdAndRemove(id)
   res.json({msg:'User was deleted successfully', data: deletedUser})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})


module.exports = router

