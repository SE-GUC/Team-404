const express = require('express')
const router = express.Router()
const uuid = require('uuid/v4')
const app = express();

// We will be connecting using database 
const Feedback = require('../../models/Feedback')

// temporary data created as if it was pulled out of the database ...
const feedbacks = [
    new Feedback('2', 'be a programmer', 'nice event', 'Hania Ghannam'),
    new Feedback('3', 'design fundementals','i love this evet', 'Lobna El-Badrawy'),
];

router.get('/', (req, res) => res.json({ data: feedbacks }))

router.get('/:id', (req, res) => {
    const feedbackId = req.params.id 
    const feedback = feedbacks.find(Feedback => Feedback.id === feedbackId)
    res.send(feedback)
 
});

// create
router.post('/', (req, res) => {
	const event = req.body.event;
    const response = req.body.response;
    const name = req.body.name;

	if (!event) return res.status(400).send({ err: 'event field is required' });
	if (typeof event !== 'number') return res.status(400).send({ err: 'Invalid value for event' });
	if (!response) return res.status(400).send({ err: 'response field is required' });
    if (typeof response !== 'string') return res.status(400).send({ err: 'Invalid value for response' });
    if (!name) return res.status(400).send({ err: 'name field is required' });
    if (typeof name !== 'string') return res.status(400).send({ err: 'Invalid value for name' });
   
	const newFeedback = {
        event,
        response,
        name,
        id : uuid(),
    };
    feedbacks.push(newFeedback);
    return res.json({ data: newFeedback });

});

// update 
router.put('/:id', (req, res) => {
    const feedbackId = req.params.id 
    const feedback = feedbacks.find(Feedback => Feedback.id === feedbackId)
    if(req.body.event){
    const updatedEvent = req.body.event;
    feedback.event = updatedEvent;
    }
    if(req.body.response){
    const updatedResponse = req.body.response;
    feedback.response = updatedResponse;
    }
    if( req.body.name){
    const updatedName = req.body.name;
    feedback.name = updatedName;
    }
  

    res.send(feedbacks)
});

// Delete a feedback
router.delete('/:id',(req,res)=>
{
    const feedbackId = req.params.id
    const feedback = feedbacks.find(Feedback => Feedback.id === feedbackId)
    const index = feedbacks.indexOf(feedback)
    feedbacks.splice(index,1)
    res.send(feedbacks)
}) 

//const port = process.env.PORT | 7000
//app.listen(port, () => console.log(`Server up and running on port ${port}`))

module.exports = router





