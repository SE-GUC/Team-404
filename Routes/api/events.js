const express = require('express')
const router = express.Router()

// We will be connecting using database 
const Events = require('../../models/Event')

// temporary data created as if it was pulled out of the database ...
const event = [
    new Events('5', 'photoshop for everyone', 'Islam Sanad', 'Basement', 'come learn PS', '125', '0', 'Helen', '2', 'photoshop', '', 'Design', 'Accepted'),
    new Events('7', 'be a programmer', 'Hania Ghannam', 'Roof', 'funamenetals java', '100','5', 'Hania, mohamed', '10', 'java', '', 'CS', 'Rejected'),
    new Events('6', 'design fundementals', 'Clara Kamel', 'GUC', 'editing layers', '250', '2', 'abdelsalam', '5', 'photoshop', '', 'Art', 'NA'),

];

router.get('/', (req, res) => res.json({ data: event }))

module.exports = router