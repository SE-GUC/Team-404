const express = require('express')
//const router = express.Router()
const router = express.Router()
const app = express()
app.use(express.json())

// We will be connecting using database 
const Event = require('../../models/Event')

// temporary data created as if it was pulled out of the database ...
const events = [
    new Event('5', 'photoshop for everyone', 'Islam Sanad', 'Basement', 'come learn PS', '125', '0', 'Helen', '2', 'photoshop', '', 'Design', 'Accepted'),
    new Event('7', 'be a programmer', 'Hania Ghannam', 'Roof', 'funamenetals java', '100', '5', 'Hania, mohamed', '10', 'java', '', 'CS', 'Rejected'),
    new Event('6', 'design fundementals', 'Clara Kamel', 'GUC', 'editing layers', '250', '2', 'abdelsalam', '5', 'photoshop', '', 'Art', 'NA'),

];

router.get('/', (req, res) => res.json({ data: events }))

module.exports = router

// Default route (entry point)
app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})

// Create a new newEvent 
router.post('/', (req, res) => {
    const name = req.body.name
    const organizer = req.body.organizer
    const location = req.body.location
    const description = req.body.description
    const remainingplaces = req.body.remainingplaces
    const speakers = req.body.speakers
    const maximumplaces = req.body.maximumplaces
    const topicscovered = req.body.topicscovered
    const feedbackid = req.body.feedbackid
    const field = req.body.field
    const approvalstatus = req.body.approvalstatus
    //const eid = req.body.eid

    if (!name) return res.status(400).send({ err: 'name field is required' });
    if (typeof name !== 'string') return res.status(400).send({ err: 'Invalid value for name' });

    if (!organizer) return res.status(400).send({ err: 'organizer field is required' });
    if (typeof organizer !== 'string') return res.status(400).send({ err: 'Invalid value for organizer' });

    if (!location) return res.status(400).send({ err: 'location field is required' });
    if (typeof location !== 'string') return res.status(400).send({ err: 'Invalid value for location' });

    if (!description) return res.status(400).send({ err: 'description field is required' });
    if (typeof description !== 'string') return res.status(400).send({ err: 'Invalid value for description ' });

    if (!remainingplaces) return res.status(400).send({ err: 'remainingplaces field is required' });
    if (typeof remainingplaces !== 'string') return res.status(400).send({ err: 'Invalid value for remainingplaces' });

    if (!speakers) return res.status(400).send({ err: 'speakers field is required' });
    if (typeof speakers !== 'number') return res.status(400).send({ err: 'Invalid value for speakers' });

    if (!maximumplaces) return res.status(400).send({ err: 'maximumplaces field is required' });
    if (typeof maximumplaces !== 'string') return res.status(400).send({ err: 'Invalid value for maximumplaces' });

    if (!topicscovered) return res.status(400).send({ err: 'topicscovered field is required' });
    if (typeof topicscovered !== 'string') return res.status(400).send({ err: 'Invalid value for topicscovered' });

    if (!feedbackid) return res.status(400).send({ err: 'feedbackid field is required' });
    if (typeof feedbackid !== 'string') return res.status(400).send({ err: 'Invalid value for feedbackid ' });

    if (!fieldl) return res.status(400).send({ err: 'the field field is required' });
    if (typeof field !== 'string') return res.status(400).send({ err: 'Invalid value for field' });

    if (!approvalstatus) return res.status(400).send({ err: 'approvalstatus field is required' });
    if (typeof approvalstatus !== 'string') return res.status(400).send({ err: 'Invalid value for approvalstatus' });

    const newEvent = {
        name: name,
        organizer: organizer,
        location: location,
        description: description,
        remainingplaces: remainingplaces,
        speakers: speakers,
        maximumplaces: maximumplaces,
        topicscovered: topicscovered,
        feedbackid: feedbackid,
        field: field,
        approvalstatus: approvalstatus,
        id: events.length + 1
    }

    events.push(newEvent)
    res.send(events)
    // return res.json({data: newEvent});
})

// Update event 
router.put('/:id', (req, res) => {
    const eventID = req.params.id
    const event = events.find(Event => Event.id === eventID)
    if (req.body.name) {
        const updatedname = req.body.name;
        event.name = updatedname;
    }
    if (req.body.organizer) {
        const updatedorganizer = req.body.organizer;
        event.organizer = updatedorganizer;
    }
    if (req.body.location) {
        const updatedlocation = req.body.location;
        event.location = updatedlocation;
    }
    if (req.body.description) {
        const updateddescription = req.body.description;
        event.description = updateddescription;
    }
    if (req.body.remainingplaces) {
        const updatedremainingplaces = req.body.remainingplaces;
        event.remainingplaces = updatedremainingplaces;
    }
    if (req.body.speakers) {
        const updatedspeakers = req.body.speakers;
        event.speakers = updatedspeakers;
    }
    if (req.body.maximumplaces) {
        const updatedmaximumplaces = req.body.maximumplaces;
        event.maximumplaces = updatedmaximumplaces;
    }
    if (req.body.topicscovered) {
        const updatedtopicscovered = req.body.topicscovered;
        event.topicscovered = updatedtopicscovered;
    }
    if (req.body.feedbackid) {
        const updatedfeedbackid = req.body.feedbackid;
        event.feedbackid = updatedfeedbackid;
    }
    if (req.body.field) {
        const updatedfield = req.body.field;
        event.field = updatedfield;
    }
    if (req.body.approvalstatus) {
        const updatedapprovalstatus = req.body.approvalstatus;
        event.approvalstatus = updatedapprovalstatus;
    }
    res.send(events)
});

// Delete newEvent 
router.delete('/:id', (req, res) => {
    const eid = req.params.id
    const newEvent = events.find(newEvent => newEvent.id === eid)
    const index = events.indexOf(newEvent)
    events.splice(index, 1)
    res.send(events)
})

const port = process.env.PORT | 3030;
app.listen(port, () => console.log(`Server up and running on port ${port}`))