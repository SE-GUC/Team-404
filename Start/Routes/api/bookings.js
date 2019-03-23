const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Booking = require('../../Models/Booking')
const validator = require('../../Validation/bookingValid')
//const joi = require("Joi")



router.get('/', async (req, res) => {
  const bookings = await Booking.find()
  res.json({ data: bookings })
})

router.post("/", (req,res)=>{
    if(!req.body){
        return res.status(400).send("Body is missing")
    }
    try {
      const isValidated = validator.createValidation(req.body)
      if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    }
      catch (error) {
        console.log(error)
      }
    let newBooking = new Booking(req.body)
    newBooking.save()
    .then((doc) => {
    if(!doc || doc.length ==0)
    {
        return res.status(500).send(doc)
    }
    res.status(201).send(doc)
})
.catch((err)=>{
    res.status(500).json(err)
})
})

//delete a booking 
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedBooking = await Booking.findByIdAndRemove(id)
     res.json({msg:'Booking was deleted successfully', data: deletedBooking})
    }
    catch(error) {
        // We will be handling the error later
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
  Booking.findByIdAndUpdate(request.params.id, request.body, { new: true }, (err, model) => {
    if (!err) {
      return response.json({ data: model })
    } else {
      return response.json({ error: `Couldn't update booking with the data` })
    }
  })
})

module.exports = router

//app.listen(port, () => console.log(`Listening on port ${port}`));
