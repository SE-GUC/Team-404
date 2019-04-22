// routings for task
const express = require("express");
const app = express();
app.use(express.json());
const router = express.Router();
const Task = require("../../Models/Task");
const sendNotif = require("../../utils/mailer");
const users = require("../api/users");
const joi = require("Joi");
const validator = require("../../Validation/taskValid");

router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json({ data: tasks });
});

router.get("/consultancyRequested/:status", async (req, res) => {
  var status = req.params.status;
  const tasks = await Task.find({ consultancyRequested: status }).exec();
  res.json({ data: tasks });
  if (!tasks) {
    return res.status(400).send({
      message: "couldnt find a task with the specififed status "
    });
  }
});

router.get("/getT/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const requestedTask = await Task.findById(id);
    res.json({ msg: "Task you asked for", data: requestedTask });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  /*  try {
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message }); */
  const task = await new Task({
    title: req.body.title,
    description: req.body.description,
    eta: req.body.eta,
    levelOfCommitment: req.body.levelOfCommitment,
    partner: req.body.partner,
    monetaryCompensation: req.body.monetaryCompensation,
    skills: req.body.skills,
    lifeCycleStatus: "Denied",
    experienceNeeded: req.body.experienceNeeded,
    consultancyRequested: req.body.consultancyRequested
  }).save();

  if (consultancyRequested) {
    users.array.forEach(user => {
      if (user.userType == "Consultant") {
        sendNotif(user.email, "Consultancy req", "LirtenHub");
      }
    });
  }
  return res.json({ data: task });
  /* }  catch (error) {
    console.log(error);
  } */
});

router
  .route("/:id")
  .all(async (request, response, next) => {
    const status = joi.validate(request.params, {
      id: joi
        .string()
        .length(24)
        .required()
    });
    if (status.error) {
      return response.json({ error: status.error.details[0].message });
    }
    next();
  })

  .get(async (request, response) => {
    try {
      const task = await Task.findById(request.params.id).exec();
      return response.json({ data: task });
    } catch (err) {
      return response.json({
        error: `Error, couldn't find a task given the following id`
      });
    }
  })

  .put(async (request, response) => {
    Task.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true },
      (err, model) => {
        if (!err) {
          return response.json({ data: model });
        } else {
          return response.json({
            error: `Error, couldn't update a Task given the following data`
          });
        }
      }
    );
  })

  .delete((request, response) => {
    Task.findByIdAndDelete(request.params.id, (err, model) => {
      if (!err) {
        const x = null;
        return response.json(x);
      } else {
        return response.json({
          error: `Error, couldn't delete a Task given the following data`
        });
      }
    });
  });

//router.get("/viewTaskStatus/:tid", async (req, res) => {
//var Pid = "dummydata4";
//var Tid = req.params.tid;
//var tasks = await Task.findById(Tid);
//if (!tasks) {
//return res.status(400).send({
//message: "couldnt find a task with the specififed id "
//});
//}

// router.get("/viewTaskStatus/:tid", async (req, res) => {
// var Pid = req.body.partner;
// var Tid = req.params.tid;
//var tasks = await Task.findById(Tid);

//   if (!tasks) {
//   return res.status(400).send({
//   message: "couldnt find a task with the specififed id "
// });
// }
// var query = { _id: Tid, partner: Pid };
// let foundTask = await Task.findOne(query);
// if (!foundTask) {
// return res.status(400).send({
// message: "couldnt find a task with the specififed id and partner id "
// });
//}
// console.log(foundTask.lifeCycleStatus)
//return res.status(200).send({
// message: "success",
// lifecycle: foundTask.lifeCycleStatus,
//test: foundTask
// });
// });

//var query = { _id: Tid, partner: Pid };
//let foundTask = await Task.findOne(query);
//console.log(query)
//console.log(foundTask)
//if (!foundTask) {
//return res.status(400).send({
//message: "couldnt find a task with the specififed id and partner id "
//});
//}

// return res.status(200).send({
// message: "succuess",
// lifecycle: foundTask.lifecyclestatus,
// test: foundTask
//});

router.get("/viewTaskStatus/:tid", async (req, res) => {
  var Pid = req.body.partner;
  var Tid = req.params.tid;
  var tasks = await Task.findById(Tid);

  if (!tasks) {
    return res.status(400).send({
      message: "couldnt find a task with the specififed id "
    });
  }
  var query = { _id: Tid, partner: Pid };
  let foundTask = await Task.findOne(query);
  if (!foundTask) {
    return res.status(400).send({
      message: "couldnt find a task with the specififed id and partner id "
    });
  }
  console.log(foundTask.lifeCycleStatus);
  return res.status(200).send({
    message: "success",
    lifecycle: foundTask.lifeCycleStatus
    //test: foundTask
  });
});

router.put("/UpdateProjectAttributes/:Tid", async (req, res) => {
  var Pid = req.body.id;
  var Tid = req.params.Tid;

  let {
    title,
    description,
    eta,
    levelOfCommitment,
    partner,
    monetaryCompensation,
    skills,
    lifeCycleStatus,
    experienceNeeded,
    consultancyRequested,
    consultant,
    application,
    tags
  } = req.body;

  let updateBody = {};
  if (title) {
    updateBody.title = title;
  }
  if (description) {
    updateBody.description = description;
  }
  if (eta) {
    updateBody.eta = eta;
  }
  if (levelOfCommitment) {
    updateBody.levelOfCommitment = levelOfCommitment;
  }
  if (partner) {
    updateBody.partner = partner;
  }
  if (monetaryCompensation) {
    updateBody.monetaryCompensation = monetaryCompensation;
  }
  if (skills) {
    updateBody.skills = skills;
  }
  if (lifeCycleStatus) {
    updateBody.lifeCycleStatus = lifeCycleStatus;
  }
  if (experienceNeeded) {
    updateBody.experienceNeeded = experienceNeeded;
  }
  if (consultancyRequested) {
    updateBody.consultancyRequested = consultancyRequested;
  }
  if (consultant) {
    updateBody.consultant = consultant;
  }
  if (application) {
    updateBody.application = application;
  }
  if (tags) {
    updateBody.tags = tags;
  }
  //     let partner = await Partner.findById(Pid)
  //     if(!partner){
  //       return res.status(400).send({
  //          message:"couldnt find a partner with the specififed id "
  //        })
  //      }
  var tasks = await Task.findById(Tid); //.exec()
  if (!tasks) {
    return res.status(400).send({
      message: "couldnt find a task with the specififed id "
    });
  }
  var query = { _id: Tid, partner: Pid };
  const updated = await Task.findOneAndUpdate(
    {
      _id: Tid
    },
    {
      $set: updateBody
    },
    {
      new: true
    }
  );

  if (updated != null) {
    return res.json({
      success: true,
      message: "Task updated",
      updatedTask: updated
    });
  }

  return res.status(400).json({
    success: false,
    message: "Task update failed"
  });
});

module.exports = router;
