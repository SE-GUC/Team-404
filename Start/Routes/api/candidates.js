
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
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
    age: req.body.age,
    username: req.body.username,
    phonenumber: req.body.phonenumber,
    usertype:req.body.usertype,
    location: req.body.location,  
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


