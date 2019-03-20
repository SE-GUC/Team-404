const express = require('express');
const router = express.Router();
const Consultant = require('../Start/Models/Consultant');


router.get('/', (req,res) => res.json({data: Consultant}))

router.get('/:id', (req, res) => {
    const consultantID = req.params.id
    const consultant = consultants.find(consultant => consultant.id === consultantID)
    res.send(consultant)
});

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
    .then(consultant => res.json({data: consultant}))
    .catch(err => res.json({error: 'Can not create consultant'}))
})





module.exports = router