
// Dependencies
const mongoose = require('mongoose')
const express = require('express')

const router = express.Router()
const Candidate = require('../../Models/Candidate')
const validator = require('../../Validation/Candidate.validation')

router.get('/', async (req, res) => {
  const candidates = await Candidate.find()
  res.json({ data: candidates })
})

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const requestedCandidate = await Candidate.findById(id)
    res.json({ msg: 'Candidate you asked for', data: requestedCandidate })
  } catch (error) {
    console.log(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newCandidate = await new Candidate({
      age: req.body.age,
      skills: req.body.skills,
      interests: req.body.interests,
      pasteventsandtasks: req.body.pasteventsandtasks,
      reviewsrecieved: req.body.reviewsrecieved
    }).save()
    // newCandidate.save()
    return res.json({ data: newCandidate })

    // res.json({msg:'Candidate was created successfully created', data: newCandidate})
  } catch (error) {
    // We will be handling the error later
    console.log(error)
  }
})
router.put('/:id', async (request, response) => {
  Candidate.findByIdAndUpdate(request.params.id, request.body, { new: true }, (err, model) => {
    if (!err) {
      return response.json({ data: model })
    } else {
      return response.json({ error: `Error, couldn't update a Cadnidate given the following data` })
    }
  })
})

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const deletedCandidate = await Candidate.findByIdAndRemove(id)
    res.json({ msg: 'Candidate was deleted successfully', data: deletedCandidate })
  } catch (error) {
    // We will be handling the error later
    console.log(error)
  }
})

const viewEvents = async () => {
  try {
    var view = await Event.find()
    return view
  } catch (err) {
  // handle any possible error and exit gracefully
    console.log(err)
  }
}
router.get('/', viewEvents)

const bookEvent = async (req, res) => {
  try {
    var cid = req.params.id
    var eid = req.params.id

    console.log('success')

    var candidate = await Candidate.findById(cid).exec()
    var event = await Event.findById(eid).exec()
    candidate.pastEvents.push(eid)

    var newBooking = new Booking({
      event: eid,
      partner: req.body.partner,
      attendee: cid,
      dateofbooking: req.body.dateofbooking
    })
    console.log(newBooking)
    var findEvent = Event.findById(eid)
    findEvent.remainingPlaces -= 1
    Event.updateOne({ id: eid }, findEvent)
  } catch (err) {
    console.log("couldn't book")
  }
}

router.post('/:cid/events/:eid', bookEvent)

module.exports = router
