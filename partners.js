const express = require('express');
//const Joi = require('joi');
const router = express.Router();

// We will be connecting using database 
const Partner = require('../../Models/Partner')

// temporary data created as if it was pulled out of the database ...
const partners = [
    new Partner('ABC', 'a basic china', 'isanad','jason mamoa','join the aquas','art','',''),
    new Partner('XYZ', 'anything','ismailaboulela', 'rob stark','kill the lannisters','bladesmith','',''),
    new Partner('qwerty','abilities','gomanaelshimy','direwolf','im lonely','tech','',''),
   
];
router.get('/', (req, res) => res.json({ data: partners }))

//view
router.get('/:id', (req, res) => {
    const partnerId = req.params.id
    const partner = partners.find(partner => partner.id === partnerId)
    res.send(partner)
    //return res.json({ data: partner});
});

//create a Partner
router.post('/', (req, res) => {
	const organisationname = req.body.organisationname;
    const basicinformation = req.body.basicinformation;
    const partners = req.body.partners;
    const boardmembers = req.body.boardmembers;
    const eventsorganized = req.body.eventsorganized;
    const fieldofwork = req.body.fieldofwork;
    const projecthistory = req.body.projecthistory;
    const feedbackform = req.body.feedbackform;
	if (!organisationname) return res.status(400).send({ err: 'organisationname field is required' });
	if (typeof organisationname !== 'string') return res.status(400).send({ err: 'Invalid value for organisationname field' });
	if (!basicinformation) return res.status(400).send({ err: 'basicinformation field is required' });
    if (typeof basicinformation !== 'string') return res.status(400).send({ err: 'Invalid value for basicinformation field' });
    if (!partners) return res.status(400).send({ err: 'partners field is required' });
    if (typeof partners !== 'string') return res.status(400).send({ err: 'Invalid value for partners field' });
    if (!boardmembers) return res.status(400).send({ err: 'boardmembers field is required' });
    if (typeof boardmembers !== 'string') return res.status(400).send({ err: 'Invalid value for boardmembers field '});
    if (!eventsorganized) return res.status(400).send({ err: 'eventsorganized field is required' });
	if (typeof eventsorganized !== 'string') return res.status(400).send({ err: 'Invalid value for eventsorganized field' });
    if (!fieldofwork) return res.status(400).send({ err: 'fieldofwork field is required' });
	if (typeof fieldofwork !== 'string') return res.status(400).send({ err: 'Invalid value for fieldofwork field' });
    if (!projecthistory) return res.status(400).send({ err: 'projecthistory field is required' });
	if (typeof projecthistory !== 'string') return res.status(400).send({ err: 'Invalid value for projecthistory field' });
    if (!feedbackform) return res.status(400).send({ err: 'feedbackform field is required' });
	if (typeof feedbackform !== 'string') return res.status(400).send({ err: 'Invalid value for feedbackform field' });
    const newpartner = {
        organisationname,
        basicinformation,
        partners,
        boardmembers,
        eventsorganized,
        fieldofwork,
        projecthistory,
        feedbackform,
    };
    partners.push(newpartner);
    return res.json({ data: newpartner });
    
});
router.put('/:id', (req, res) => {
    const partnerId = req.params.id 
    const partner = partners.find(partner => partner.id === partnerId)
    if(req.body.organisationname){
    const updatedorganisationname = req.body.organisationname;
    partner.organisationname = updatedorganisationname;
    }
    if(req.body.basicinformation){
    const updatedbasicinformation = req.body.basicinformation;
    partner.basicinformation = updatedbasicinformation;
    }
    if( req.body.partners){
    const updatedpartners = req.body.partners;
    partner.partners = updatedpartners;
    }
    if(req.body.boardmembers){
    const updatedboardmembers = req.body.boardmembers;
    partner.boardmembers = updatedboardmembers;
    }
    if(req.body.eventsorganized){
    const updatedeventsorganized = req.body.eventsorganized;
    partner.eventsorganized = updatedeventsorganized;
    }
    if(req.body.fieldofwork){
        const updatedfieldofwork = req.body.fieldofwork;
        partner.fieldofwork = updatedfieldofwork;
        }
    if(req.body.projecthistory){
        const updatedprojecthistory = req.body.projecthistory;
        partner.projecthistory = updatedprojecthistory;
        }
    if(req.body.feedbackform){
        const updatedfeedbackform = req.body.feedbackform;
        partner.feedbackform = updatedfeedbackform;
        }
    res.send(partners)
});
router.delete('/:id', (req, res) => {
    const partnerId = req.params.id;
    const partner = partners.find(partner => partner.id === partnerId)
    const index=partners.indexOf(partner)
    partners.splice(index,1)
    res.send(partners)
}); 

module.exports = router;