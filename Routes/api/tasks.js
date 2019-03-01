//routings for task

const express = require('express')
const router = express.Router()

// We will be connecting using database 
//const Book = require('../../models/Book')

// temporary data created as if it was pulled out of the database ...
const tasks = [
    new Task(1, 'help me', '140 days', 'low', 'isanad', 400, 'Microsoft', 'pending', 0),
    new Task(2, 'kill me', '1 month', 'high', 'gomanaelshimy', 5000, 'hitman', 'done', 5),
    new Task(3, 'feed me', '1 month', 'low', 'gomanaelshimy', 3000, 'Chef', 'in progress', 3),
    new Task(4, 'drive me', 'high', 'ismailaboulela', 10000, 'Driving', 'in progress', 2),
];

router.get('/', (req, res) => res.json({ data: tasks }))

module.exports = router

