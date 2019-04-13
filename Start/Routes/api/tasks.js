// routings for task
const mongoose = require('mongoose')
const express = require('express')
const app = express()
app.use(express.json())
const router = express.Router()
//const uuid = require('uuid')
const Task = require('../../Models/Task')

const joi = require("Joi")
//const joi = require("Joi")

const validator = require('../../Validation/taskValid')


router.get('/', async (req, res) => {
  const tasks = await Task.find()
  res.json({ data: tasks })
})



router.get('/:id', async (req,res) => {
  try{
    const id = req.params.id
    const requestedTask =  await Task.findById(id)
    res.json({data: requestedTask})
  }catch(error){
    console.log(error)
  }
})

router.post('/', async (req, res) => {

try {
    const isValidated = validator.createValidation(req.body)
  if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
  const task = await new Task({
        description: req.body.description,
        eta: req.body.eta,
        levelOfCommitment: req.body.levelOfCommitment,
        partner: req.body.partner,
        monetaryCompensation: req.body.monetaryCompensation,
        skills: req.body.skills,
        lifeCycleStatus: req.body.lifeCycleStatus,
        experienceNeeded: req.body.experienceNeeded,
        consultancyRequested: req.body.consultancyRequested,
         }).save()

         
         return res.json({ data: task })

  } catch (error) {
    console.log(error)
  } })

 
  router
  .route('/:id')
  .all(async (request, response, next) => {
    const status = joi.validate(request.params, {
      id: joi.string().length(24).required()
    })
    if (status.error) {
      return response.json({ error: status.error.details[0].message })
    }
    next()
  })

  // .put(async (request, response) => {
  //   Task.findByIdAndUpdate(request.params.id, request.body, { new: true }, (err, model) => {
  //     if (!err) {
  //       return response.json({ data: model })
  //     } else {
  //       return response.json({ error: `Error, couldn't update a Task given the following data` })
  //     }
  //   })
  // })

  .delete((request, response) => {
    Task.findByIdAndDelete(request.params.id, (err, model) => {
      if (!err) {
        return response.json({ data: null })
      } else {
        return response.json({ error: `Error, couldn't delete a Task given the following data` })
      }
    })
  })


  router.get('/viewTaskStatus/:tid', async (req, res) => {
              var Pid = req.body.pid
              var Tid = req.params.tid
              var tasks = await Task.findById(Tid)
              if(!tasks){
              return  res.status(400).send({
                  message:"couldnt find a task with the specififed id "
                })
              }
              var query = {'_id':Tid,
              'partner':Pid
            };
              let foundTask=await Task.findOne(query)
              if(!foundTask){
              return  res.status(400).send({
                  message:"couldnt find a task with the specififed id and partner id "
                })
              }

              return res.status(200).send({
                message:"succuess",
                lifecycle:foundTask.lifecyclestatus,
                test:foundTask
              })

  })

  router.put('/:Tid', async (req, res) => {
    var Pid = req.body.id
    var Tid = req.params.Tid

let {description,eta,levelOfCommitment,partner,monetaryCompensation,skills,lifeCycleStatus,experienceNeeded,consultancyRequested,consultant,applications
}=req.body

let updateBody={}
if(description){
  updateBody.description=description
}
if(eta){
  updateBody.eta=eta
}
if(levelOfCommitment){
  updateBody.levelOfCommitment=levelOfCommitment
}
if(partner){
  updateBody.partner=partner
}
if(monetaryCompensation){
  updateBody.monetaryCompensation=monetaryCompensation
}
if(skills){
  updateBody.skills=skills
}
if(lifeCycleStatus){
  updateBody.lifeCycleStatus=lifeCycleStatus
}
if(experienceNeeded){
  updateBody.experienceNeeded=experienceNeeded
}
if(consultancyRequested){
  updateBody.consultancyRequested=consultancyRequested
}
if(consultant){
  updateBody.consultant=consultant
}
if(applications){
  updateBody.applications=applications
}

    var tasks = await Task.findById(Tid)//.exec()
    if(!tasks){
      return  res.status(400).send({
          message:"couldnt find a task with the specififed id "
        })
      }
      var query = {'_id':Tid,
      'partner':Pid
    };
    const updated = await Task.findOneAndUpdate({
      '_id': Tid 
    }, {
      $set: updateBody,
    }, {
      new: true
    })
  
    if (updated != null) {
      return res.json({
        success: true, 
        message: 'Task updated',
        updatedTask: updated
      })
    }
  
    return res.status(400).json({
      success: false,
      message: 'Task update failed'
    })
  
  
})
module.exports = router