const express = require('express')
const router = express.Router()

// We will be connecting using database 
const Applications = require('../../models/Application')

// temporary data created as if it was pulled out of the database ...
const application = [
    new Applications('Karim El-Mahdy', 'Islam Sanad', '1/7/2018 5:56', 'help me', 'pending'),
    new Applications('Karim El-Mahdy', 'Islam Sanad', '9/4/2018 14:00', 'kill me', 'accepted'),
    new Applications('Karim El-Mahdy', 'Gomana El-Shimy', '5/5/2018 6:05', 'feed me', 'rejected'),
    new Applications('Karim El-Mahdy', 'Gomana El-Shimy', '7/8/2018 2:17', 'drive me', 'pending')
];

router.get('/', (req, res) => res.json({ data: applications }))

module.exports = router