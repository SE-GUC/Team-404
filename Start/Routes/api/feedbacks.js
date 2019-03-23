const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const app = express();

// We will be connecting using database 
const Feedback = require('../../models/Feedback')
const Validator = require('../../validations/FeedbackValidations')

router.get('/',async (req,res)=>
{
    const feedbacks = await Feedback.find()
    res.json({data : feedbacks})
})

// Create a feedback

router.post('/' ,async(req,res)=>
{
    try{
        const isValidated = Validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({error: isValidated.error.details[0].message})
        const newFeedback = await Feedback.create(req.body)
        res.json({msg:'Feedback was created successfully', data: newFeedback})
       }
       catch(error)
       {
           console.log(error)
       }
})

//Update a feedback

router.put('/:id',async (req,res)=>{
    try{
        const id = req.params.id
        const feedbacks = await feedbacks.findOne({id})
        if(!feedbacks) return res.status(404).send({error:'Feedback does not exist' })
        const isValidated = Validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({error : isValidated.error.details[0].message})
        const updatedFeedback = await Feedback.updateOne(req.body)
        res.json({msg: 'Feedback updated successfully'})
    }
    catch(error)
    {
        console.log(error)
    }
})
router.delete('/:id' , async (req,res)=> {
    try {
        const id = req.params.id
        const deletedFeedback = await Feedback.findByIdAndRemove(id)
        res.json({msg:'Feedback was deleted successfully',data : deletedFeedback})
    }
    catch(error)
    {
        console.log(error)
    }
})
module.exports = router





