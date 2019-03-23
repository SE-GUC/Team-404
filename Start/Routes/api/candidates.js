<<<<<<< HEAD
// Dependencies
const mongoose= require('mongoose');
const express = require('express');

const router = express.Router();
const Candidate= require('../../Models/Candidate');
const validator = require('../../Validation/Candidate.validation')

router.get('/', async (req,res) => {
  const candidates = await Candidate.find()
  res.json({data: candidates})
})

  router.get('/:id',async (req,res)=>{
    try {
      const id = req.params.id
      const requestedCandidate = await Candidate.findById(id)
      res.json({msg:'Candidate you asked for', data: requestedCandidate})
     }catch(error){
      console.log(error)
     }
     })

router.post('/', async (req,res) => {
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
   //newCandidate.save()
   return res.json({ data: newCandidate })

 // res.json({msg:'Candidate was created successfully created', data: newCandidate})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})
  router.put('/:id',async (request, response) => {
  Candidate.findByIdAndUpdate(request.params.id, request.body, { new: true }, (err, model) => {
    if (!err) {
      return response.json({ data: model })
    } else {
      return response.json({ error: `Error, couldn't update a Cadnidate given the following data` })
    }
  })
})
  

router.delete('/:id',async(req,res)=>{
 
  try {
    const id = req.params.id
    const deletedCandidate = await Candidate.findByIdAndRemove(id)
    res.json({msg:'Candidate was deleted successfully', data: deletedCandidate})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
});

module.exports = router;
=======
// Dependencies
const express = require('express')
// const Joi = require('joi');
const uuid = require('uuid/v4')
const router = express.Router()

// Models
const Candidate = require('../../Models/Candidate')

// temporary data created as if it was pulled out of the database ...
const candidates = [
  new Candidate(18, 'cooking, driving , photoshop', 'food , cars', 'photoshop for everyone', ''),
  new Candidate(20, 'Microsoft , Dancing , Singing , coding', 'music , anime', 'be a programmer', ''),
  new Candidate(22, 'Drawing , Reading , Leading, hitman', 'history', 'kill me,', '')

]

router.get('/', (req, res) => res.json({ data: candidates }))

router.get('/:id', (req, res) => {
  const candidateId = req.params.id
  const candidate = candidates.find(Candidate => Candidate.id === candidateId)
  res.send(candidate)
  // return res.json({ data: candidate});
})

// creat a Candidate
router.post('/', (req, res) => {
  const age = req.body.age
  const skills = req.body.skills
  const interests = req.body.interests
  const pasteventsandtasks = req.body.pasteventsandtasks
  const reviewsrecieved = req.body.reviewsrecieved

  if (!age) return res.status(400).send({ err: 'age field is required' })
  if (typeof age !== 'number') return res.status(400).send({ err: 'Invalid value for age' })
  if (!skills) return res.status(400).send({ err: 'skills field is required' })
  if (typeof skills !== 'string') return res.status(400).send({ err: 'Invalid value for skills' })
  if (!interests) return res.status(400).send({ err: 'interests field is required' })
  if (typeof interests !== 'string') return res.status(400).send({ err: 'Invalid value for interests' })
  if (!pasteventsandtasks) return res.status(400).send({ err: 'pasteventsandtasks field is required' })
  if (typeof pasteventsandtasks !== 'string') return res.status(400).send({ err: 'Invalid value for pasteventsandtasks ' })
  if (!reviewsrecieved) return res.status(400).send({ err: 'reviewsrecieved field is required' })
  if (typeof reviewsrecieved !== 'string') return res.status(400).send({ err: 'Invalid value for reviewsrecieved' })

  const newCandidate = {
    age,
    skills,
    interests,
    pasteventsandtasks,
    reviewsrecieved,
    id: uuid()
  }
  candidates.push(newCandidate)
  return res.json({ data: newCandidate })
})

router.put('/:id', (req, res) => {
  const candidateId = req.params.id
  const candidate = candidates.find(Candidate => Candidate.id === candidateId)
  if (req.body.age) {
    const updatedage = req.body.age
    candidate.age = updatedage
  }
  if (req.body.skills) {
    const updatedskills = req.body.skills
    candidate.skills = updatedskills
  }
  if (req.body.interests) {
    const updatedinterests = req.body.interests
    candidate.interests = updatedinterests
  }
  if (req.body.pasteventsandtasks) {
    const updatedpasteventsandtasks = req.body.pasteventsandtasks
    candidate.pasteventsandtasks = updatedpasteventsandtasks
  }
  if (req.body.reviewsrecieved) {
    const updatedreviewsrecieved = req.body.reviewsrecieved
    candidate.reviewsrecieved = updatedreviewsrecieved
  }

  res.send(candidates)
})

router.delete('/:id', (req, res) => {
  const candidateId = req.params.id
  const candidate = candidates.find(Candidate => Candidate.id === candidateId)
  const index = candidates.indexOf(candidate)
  candidates.splice(index, 1)
  res.send(candidates)
})

module.exports = router
>>>>>>> 213f44757b9eb47678359b51dad2f85672a18469
