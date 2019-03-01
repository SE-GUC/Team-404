//routings for task

const express = require('express')
const app = express()
app.use(express.json())
const router = express.Router()
const uuid = require('uuid')
const Task = require ('../../Models/Task')

// We will be connecting using database 
//const Book = require('../../models/Book')

// temporary data created as if it was pulled out of the database ...
const tasks = [
    new Task("aaaaaaa", 1, "high", "lob", 2000, "skilllz", "early", "0 years","advisor 1" ),
    new Task("bbbbbbb", 2, "medium", "aasdf", 2000, "that", "early", "1 year", "advisor 2" ),
    new Task("ccccccc", 3, "low", "papapa", 5000, "pay", "early", "2 years", "adivsor 3" ),
    new Task("ddddddd", 4, "high", "zzzzz", 3000, "the bills", "early", "3 years", "advisor 4" ),

];

router.get('/', (req, res) => res.json({ data: tasks }))

// update task
router.put('/:id', (req, res) => {
    const tasksID = req.params.id 
    const Task = tasks.find(Task => Task.id === tasksID)

    const Description            = req.body.Description
    const ETA                    = req.body.eta
    const Levelofcommitment      = req.body.levelofcommitment
    const Partner                = req.body.partner
    const Monetarycompensation   = req.body.monetarycompensation
    const Skills                 = req.body.skills
    const Lifecyclestatus        = req.body.lifecyclestatus
    const Experienceneeded       = req.body.experienceneeded
    const Consultancy            = req.body.consultancy



    if(Description){
       // const Description = req.body.Description 
        Task.Description = Description 
    }
    if(ETA){
        //const ETA = req.body.eta 
        Task.eta = ETA 
    }
    if(Levelofcommitment){
        //const Levelofcommitment = req.body.levelofcommitment 
        Task.levelofcommitment = Levelofcommitment 
    }
    if(Partner){
      //  const Partner = req.body.partner 
        Task.partner = Partner 
    }
    if(Monetarycompensation){
        //const Monetarycompensation = req.body.monetarycompensation 
        Task.monetarycompensation = Monetarycompensation 
    }
    if(Skills){
       // const Skills = req.body.skills 
        Task.skills = Skills 
    }
    if(Lifecyclestatus){
       // const Lifecyclestatus = req.body.lifecyclestatus 
        Task.lifecyclestatus = Lifecyclestatus 
    }
    if(Experienceneeded){
       // const Experienceneeded = req.body.experienceneeded 
        Task.experienceneeded = Experienceneeded 
    }
    if(Consultancy){
       // const Consultancy = req.body.consultancy 
        Task.consultancy = Consultancy 
    }

    //Task.Description             = Description
    //Task.eta                     = ETA
    //Task.levelofcommitment       = Levelofcommitment
    //Task.partner                 = Partner
    //Task.monetarycompensation    = Monetarycompensation
    //Task.skills                  = Skills
    //Task.consultancy             = Consultancy
    //Task.lifecyclestatus         = Lifecyclestatus
    //Task.experienceneeded        = Experienceneeded
    
    //tasks.push(tasks)
    res.send(tasks)
})


// Delete a task
//app.delete('/api/tasks/:ID', (req, res) => {
  //  const tasksID = req.params.id 

    //const tasks = tasks.find(tasks => tasks.id === tasksID)
    //const index = tasks.indexOf(tasks)
    //tasks.splice(index,1)*9
    //res.send(tasks)
//})
module.exports = router

