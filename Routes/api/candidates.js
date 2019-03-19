// Dependencies
const express = require('express');
//const Joi = require('joi');
const uuid = require('uuid/v4');
const router = express.Router();

// Models
const Candidate = require('../../Models/Candidate');

// temporary data created as if it was pulled out of the database ...
const candidates =[
	new Candidate(18,"cooking, driving , photoshop","food , cars","photoshop for everyone",""),
	new Candidate(20,"Microsoft , Dancing , Singing , coding","music , anime", "be a programmer", ""),
	new Candidate(22, "Drawing , Reading , Leading, hitman", "history", "kill me,", "" ),

];

router.get('/', (req, res) => res.json({ data: candidates }));

router.get('/:id', (req, res) => {
    const candidateId = req.params.id
    const candidate = candidates.find(Candidate => Candidate.id === candidateId)
    res.send(candidate)
    //return res.json({ data: candidate});
});

//creat a Candidate
router.post('/', (req, res) => {
	const age = req.body.age;
    const skills = req.body.skills;
    const interests = req.body.interests;
    const pasteventsandtasks = req.body.pasteventsandtasks;
    const reviewsrecieved = req.body.reviewsrecieved;

	if (!age) return res.status(400).send({ err: 'age field is required' });
	if (typeof age !== 'number') return res.status(400).send({ err: 'Invalid value for age' });
	if (!skills) return res.status(400).send({ err: 'skills field is required' });
    if (typeof skills !== 'string') return res.status(400).send({ err: 'Invalid value for skills' });
    if (!interests) return res.status(400).send({ err: 'interests field is required' });
    if (typeof interests !== 'string') return res.status(400).send({ err: 'Invalid value for interests' });
    if (!pasteventsandtasks) return res.status(400).send({ err: 'pasteventsandtasks field is required' });
    if (typeof pasteventsandtasks !== 'string') return res.status(400).send({ err: 'Invalid value for pasteventsandtasks '});
    if (!reviewsrecieved) return res.status(400).send({ err: 'reviewsrecieved field is required' });
	if (typeof reviewsrecieved !== 'string') return res.status(400).send({ err: 'Invalid value for reviewsrecieved' });

	const newCandidate = {
        age,
        skills,
        interests,
        pasteventsandtasks,
        reviewsrecieved,
        id : uuid(),
    };
    candidates.push(newCandidate);
    return res.json({ data: newCandidate });
    
});

router.put('/:id', (req, res) => {
    const candidateId = req.params.id 
    const candidate = candidates.find(Candidate => Candidate.id === candidateId)
    if(req.body.age){
    const updatedage = req.body.age;
    candidate.age = updatedage;
    }
    if(req.body.skills){
    const updatedskills = req.body.skills;
    candidate.skills = updatedskills;
    }
    if( req.body.interests){
    const updatedinterests = req.body.interests;
    candidate.interests = updatedinterests;
    }
    if(req.body.pasteventsandtasks){
    const updatedpasteventsandtasks = req.body.pasteventsandtasks;
    candidate.pasteventsandtasks = updatedpasteventsandtasks;
    }
    if(req.body.reviewsrecieved){
    const updatedreviewsrecieved = req.body.reviewsrecieved;
    candidate.reviewsrecieved = updatedreviewsrecieved;
    }

    res.send(candidates)
});


router.delete('/:id', (req, res) => {
    
    const candidateId = req.params.id;
    const candidate = candidates.find(Candidate => Candidate.id === candidateId)
    const index=candidates.indexOf(candidate)
    candidates.splice(index,1)
    res.send(candidates)
 
}); 

module.exports = router;
