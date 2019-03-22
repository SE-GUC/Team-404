const express = require('express');
const router = express.Router();
const Consultant = require('../Start/Models/Consultant');


router.get('/', (req,res) => res.json({data: Consultant}))

router.get('/', async (req, res) => {
    const consultants = await Consultant.find()
    res.json({ data: consultants })
  })

router.post('/', async (req,res) => {
    const { email, name, password, board, pastEvents, reports }  = req.body
    const consultant = await Consultant.findOne({email})
    if(consultant) return res.status(400).json({error: 'Email already exists'})
    
    const newConsultant = new Consultant({
            name,
            password,
            email,
            board,
            pastEvents,
            reports,
            
        })
    newConsultant
    .save()
    .then(consultant => res.json({data: newConsultant}))
    .catch(err => res.json({error: 'Can not create consultant'}))
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

router.get(async (request, response) => {
  try {
    const consultant = await Consultant.findById(request.params.id).exec()
    return response.json({ data: consultant })
  } catch (err) {
    return response.json({ error: `Error, couldn't find a consultant given the following id` })
  }
})

router.delete((request, response) => {
    Consultant.findByIdAndDelete(request.params.id, (err, model) => {
      if (!err) {
        return response.json({ data: null })
      } else {
        return response.json({ error: `Error, couldn't delete a consultant given the following data` })
      }
    })
  })

 router.put(async (request, response) => {
    Consultant.findByIdAndUpdate(request.params.id, request.body, { new: true }, (err, model) => {
      if (!err) {
        return response.json({ data: model })
      } else {
        return response.json({ error: `Error, couldn't update a consultant given the following data` })
      }
    })
  })


module.exports = router