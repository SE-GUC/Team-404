const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const joi = require('Joi')
const router = express.Router()
const Notification = require('../../Models/Notification')
const validator = require('../../Validation/notificationValid')

const Partner = require("../../Models/Partner")
const Candidate = require("../../Models/Candidate")
const User = require("../../Models/Temp")
const Consultant = require("../../Models/Consultant")

//const partners = require("../../Models/partners")
//const candidates = require("../../Models/candidates")
//const users = require("../../Models/users")
//const consultants = require("../../Models/consultants")

router.get('/', async (req, res) => {
  const notifications = await Notification.find()
  res.json({ data: notifications })
})

router.post('/', async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const notification = await new Notification({
      
      text: req.body.text,
      date: Date.now(),
      recipient: req.body.recipient,
      recipientType: req.body.recipientType,
      trigger: req.body.trigger
    }).save()
     
    if(notification.recipientType == "Partner"){
        const updated = await Partner.updateOne({
          id: notification.recipient},{      
            $push :{
              notifs: {
                notification
            }
          }
        }
       ).lean()
      
      const success = updated.ok === 1 && updated.nModified ===1 
      if(success){
        return res.json({
          message: "notification added to partner"
        })
      }
     
    }
    else if(notification.recipientType == "Candidate"){
      const updated = await Candidate.updateOne({
        id: notification.recipient},{      
          $push :{
            notifs: {
              notification
          }
        }
      }
     ).lean()
    
    const success = updated.ok === 1 && updated.nModified ===1 
    if(success){
      return res.json({
        message: "notification added to Candidate"
      })
    }
    }
   else if(notification.recipientType == "Consultant"){
    const updated = await Consultant.updateOne({
      id: notification.recipient},{      
        $push :{
          notifs: {
            notification
        }
      }
    }
   ).lean()
  
  const success = updated.ok === 1 && updated.nModified ===1 
  if(success){
    return res.json({
      message: "notification added to Consultant"
    })
  }
    }
    else if(notification.recipientType == "User"){
      const updated = await User.updateOne({
        id: notification.recipient},{      
          $push :{
            notifs: {
              notification
          }
        }
      }
     ).lean()
    
    const success = updated.ok === 1 && updated.nModified ===1 
    if(success){
      return res.json({
        message: "notification added to User"
      })
    }
    }
    return res.json({ data: notification })
    
  } catch (error) {
    // We will be handling the error lat
     
    return res.json({ error: error })

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

  .get(async (request, response) => {
    try {
      const notification = await Notification.findById(request.params.id).exec()
      return response.json({ data: notification })
    } catch (err) {
      return response.json({ error: `Error, couldn't find a notification given the following id` })
    }
  })

  .delete((request, response) => {
    Notification.findByIdAndDelete(request.params.id, (err, model) => {
      if (!err) {
        return response.json('Notification Deleted')
      } else {
        return response.json({ error: `Error, couldn't delete a notification given the following data` })
      }
    })
  })

module.exports = router
