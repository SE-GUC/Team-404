const express = require('express')
const router = express.Router()

const candidate = require('../../models/candidate')


const candidates =[
    {age:"18", skills:"cooking, driving , photoshop", interests:"food , cars", pasteventsandtasks:"photoshop for everyone", reviewsrecieved:"" },
    {age:"20", skills:"Microsoft , Dancing , Singing , coding", interests:"music , anime", pasteventsandtasks:"be a programmer", reviewsrecieved:"" },
    {age:"22", skills:"Drawing , Reading , Leading, hitman", interests:"history", pasteventsandtasks:"kill me,", reviewsrecieved:"" }];

    router.get('/', (req, res) => res.json({ data: candidates }))

module.exports = router
