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

router.post('/', (req, res) => {
   
     const Description = req.body.Description
     const eta = req.body.eta
     const levelofcommitment = req.body.levelofcommitment
     const partner = req.body.partner
     const monetarycompensation = req.body.monetarycompensation
     const skills = req.body.skills
     const lifecyclestatus = req.body.lifecyclestatus
     const experienceneeded = req.body.experienceneeded
     const id =uuid.v4()

    if (!Description) return res.status(400).send({ err: 'Description field is required' });
	if (typeof Description !== 'string') return res.status(400).send({ err: 'Invalid value for Description' });
	if (!eta) return res.status(400).send({ err: 'eta field is required' });
    if (typeof eta !== 'number') return res.status(400).send({ err: 'Invalid eta type' });
    if (!levelofcommitment) return res.status(400).send({ err: 'levelofcommitment field is required' });
    if (typeof levelofcommitment !== 'string') return res.status(400).send({ err: 'Invalid levelofcommitment type' });
    if (!partner) return res.status(400).send({ err: 'partner field is required' });
    if (typeof partner !== 'string') return res.status(400).send({ err: 'Invalid partner type' });
    if (!monetarycompensation) return res.status(400).send({ err: 'monetarycompensation field is required' });
    if (typeof monetarycompensation !== 'number') return res.status(400).send({ err: 'Invalid monetarycompensation type' });
    if (!skills) return res.status(400).send({ err: 'skills field is required' });
	if (typeof skills !== 'string') return res.status(400).send({ err: 'Invalid value for skills' });
	if (!lifecyclestatus) return res.status(400).send({ err: 'lifecyclestatus field is required' });
    if (typeof lifecyclestatus !== 'string') return res.status(400).send({ err: 'Invalid lifecyclestatus type' });
    if (!experienceneeded) return res.status(400).send({ err: 'experienceneeded field is required' });
    if (typeof experienceneeded !== 'string') return res.status(400).send({ err: 'Invalid experienceneeded type' });
     
     const task = {
         Description,
         eta,
         levelofcommitment,
         partner,
         monetarycompensation,
         skills,
         lifecyclestatus,
         experienceneeded,
         id
     }
     tasks.push(task)
    return res.json({data: task})
 })

//view a task
router.get('/', (req, res) => res.json({ data: tasks }))

router.get('/:id', (req, res) => {
const tasksID = req.params.id
const task = tasks.find (task => task.id === tasksID)
res.send(task) 
})

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


//Delete a task
router.delete('/:id', (req, res) => {
   const tasksID = req.params.id 
   const tas = tasks.find(tas => tas.id === tasksID)
   const index = tasks.indexOf(tas)
   tasks.splice(index,1)//*9
   res.send(tasks)
})


module.exports = router


