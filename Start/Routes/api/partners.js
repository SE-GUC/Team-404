const express = require('express')
const router = express.Router()

// We will be connecting using database 
const partners = require('../../Models/Partner')

// temporary data created as if it was pulled out of the database ...
const partners = [
    new Partner('ABC', 'a basic china', 'isanad','jason mamoa','join the aquas','art','',''),
    new Partner('XYZ', 'anything','ismailaboulela', 'rob stark','kill the lannisters','bladesmith','',''),
    new Partner('qwerty','abilities','gomanaelshimy','direwolf','im lonely','tech','',''),
   
];

router.get('/', (req, res) => res.json({ data: partners }))

module.exports = router