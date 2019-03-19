const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const app = express()
//const uuid = require('uuid/v4');
// We will be connecting using database 
const Application = require('../../Models/Application')



//const validator = require('../../validations/bookValidations')

router.get('/', async (req,res) => {
    const applications = await Application.find()
    res.json({data: applications})
})


/*
THIS IS ALL PRE MONGO
// temporary data created as if it was pulled out of the database ...
const application = [
    new Application('Karim El-Mahdy', 'Islam Sanad', '1/7/2018 5:56', 'help me', 'pending', 1),
    new Application('Karim El-Mahdy', 'Islam Sanad', '9/4/2018 14:00', 'kill me', 'accepted', 2),
    new Application('Karim El-Mahdy', 'Gomana El-Shimy', '5/5/2018 6:05', 'feed me', 'rejected', 3),
    new Application('Karim El-Mahdy', 'Gomana El-Shimy', '7/8/2018 2:17', 'drive me', 'pending', 4)
];

router.get('/', (req, res) => res.json({ data: application }))

router.post('/', (req, res) => {
    const candidate = req.body.candidate;
    const partner = req.body.partner
    const datetime  = req.body.datetime
    const task  = req.body.task
    const status  = req.body.status

	if (!candidate) return res.status(400).send({ err: 'candidate field is required' });
    if (typeof candidate !== 'string') return res.status(400).send({ err: 'Invalid value for candidate' });
    if (!partner) return res.status(400).send({ err: 'partner field is required' });
    if (typeof partner !== 'string') return res.status(400).send({ err: 'Invalid value for partner' });
    if (!datetime) return res.status(400).send({ err: 'datetime field is required' });
    if (typeof datetime !== 'string') return res.status(400).send({ err: 'Invalid value for datetime' });
    if (!task) return res.status(400).send({ err: 'task field is required' });
    if (typeof task !== 'string') return res.status(400).send({ err: 'Invalid value for task' });
    if (!status) return res.status(400).send({ err: 'status field is required' });
    if (typeof status !== 'string') return res.status(400).send({ err: 'Invalid value for status' });

	const newApplication = {
		candidate,
		partner,
        datetime,
        task,
        status,
        id: uuid(),
    };
    application.push(newApplication);
	return res.json({ data: newApplication });
	
});

router.get('/:id', (req, res) => {
    const applicationId = req.params.id
    const appli = application.find(Application => Application.id === applicationId)
    res.send(appli)
    //return res.json({ data: appli});
});

router.put('/:id', (req, res) => {
    const applicationId = req.params.id 
    const appli = application.find(appli => appli.id === applicationId)
    if(req.body.candidate){
    const updatedcandidate = req.body.candidate;
    appli.candidate = updatedcandidate;
    }
    if(req.body.partner){
    const updatedpartner = req.body.partner;
    appli.partner = updatedpartner;
    }
    if( req.body.datetime){
    const updateddatetime = req.body.datetime;
    appli.datetime = updateddatetime;
    }
    if(req.body.task){
    const updatedtask = req.body.task;
    appli.task = updatedtask;
    }
    if(req.body.status){
    const updatedstatus = req.body.status;
    appli.status = updatedstatus;
    }

    res.send(application)
});

router.delete('/:id', (req, res) => {
    const appliID = req.body.id 
    const appli = application.find(appli => appli.id === appliID)
    const index = application.indexOf(appli)
    application.splice(index,1)
    res.send(application)
})

*/

module.exports = router

//9 to 11:25
//8:30 to 9:50
