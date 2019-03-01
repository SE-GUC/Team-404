const express = require('express')
const router = express.Router()

// We will be connecting using database 
const feedbacks = require('../../models/Feedbacks')

// temporary data created as if it was pulled out of the database ...
const feedbacks = [
    new Feedback('2', 'be a programmer', 'nice event', 'Hania Ghannam'),
    new Feedback('3', 'design fundementals','i love this evet', 'Lobna El-Badrawy'),

];

router.get('/', (req, res) => res.json({ data: feedbacks }))

module.exports = router