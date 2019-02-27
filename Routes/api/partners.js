const express = require('express')
const router = express.Router()

// We will be connecting using database 
const Partners = require('../../Models/Partner')

// temporary data created as if it was pulled out of the database ...
const partner = [
    new Partners('ABC', 'a basic china', 'isanad','jason mamoa','join the aquas','art','',''),
    new Partners('XYZ', 'anything','ismailaboulela', 'rob stark','kill the lannisters','bladesmith','',''),
    new Partners('qwerty','abilities','gomanaelshimy','direwolf','im lonely','tech','',''),
   
];

router.get('/', (req, res) => res.json({ data: partner }))

module.exports = router