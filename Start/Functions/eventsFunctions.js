const axios = require('axios');
const Admin = require('../../Models/Admin')
const Request = require('../../Models/Request')
const Event = require('../../Models/Event')

const functions = {

//Partner request event    
RequestEvent: async (req,res) => {
    try {
      var Pid = req.params.id
      var Rid = req.params.id

      console.log('entry success')

      var newReq = new Request({
        requestid: Rid,
        eventname: req.body.eventname,
        organizer: Pid,
        location: req.body.location,
        remainingplaces:req.body.remainingplaces,
        speakers:req.body.speakers,
        maximumplaces:req.body.maximumplaces,
        topicscovered:req.body.topicscovered,
        feedbackid:req.body.feedbackid,
        field:req.body.field,
        registrationprice:req.body,
        approvalstaus:req.body.approvalstatus,
      })
      console.log(newReq)
    }
    catch(error) {
    console.log(error)
    }
  },

   
//Admin create event 
CreateEvent: async (req,res) => {
    try {
      
      var Aid = req.params.id
      
      console.log('entry success')
      
      var newEvent = new Event({
        
        eventname: req.body.eventname,
        organizer: Aid,
        location: req.body.location,
        remainingplaces:req.body.remainingplaces,
        speakers:req.body.speakers,
        maximumplaces:req.body.maximumplaces,
        topicscovered:req.body.topicscovered,
        feedbackid:req.body.feedbackid,
        field:req.body.field,
        registrationprice:req.body.registrationprices,
        approvalstaus:'pending',
      });
      console.log(newEvent)
    }
    catch(error) {
    console.log('Could not create event')
    }
},



// Confirm partenr's request
ConfirmRequest: async (req,res) => {
   try{
        var Rid = req.params.id
        var findRequest = await Request.findById(Rid)
        findRequest.approvalstatus = 'confirmed'
        Request.updateOne({id,Rid},findRequest)
    

   }
   catch(error) {
    console.log(error) 
    }
}

}
router.post('/:Aid',functions.CreateEvent)
router.post('/:Pid/requests/:Rid',functions.RequestEvent)
router.post('/:Aid/requests/:Rid',functions.ConfirmRequest)
module.exports = functions;