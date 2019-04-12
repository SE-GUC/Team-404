const axios = require('axios');
const Admin = require('../../Models/Admin')
//const Request = require('../../Models/Request')
const Event = require('../../Models/Event')

const functions = {

//Partner request event    
RequestEvent: async (req,res) => {
  try {
      
    var Pid = req.params.id
    
    console.log('entry success')
    
    var newEvent = new Event({
      
      eventname: req.body.eventname,
      organizer: Pid,
      location: req.body.location,
      remainingplaces:req.body.remainingplaces,
      speakers:req.body.speakers,
      maximumplaces:req.body.maximumplaces,
      topicscovered:req.body.topicscovered,
      field:req.body.field,
      registrationprice:req.body.registrationprices,
      approvalstaus:'pending',
      applicants:req.body.applicants, 
      feedback:req.body.feedback
    });
    console.log(newEvent)
  }
  catch(error) {
  console.log('Could not create event')
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
        field:req.body.field,
        registrationprice:req.body.registrationprices,
        approvalstaus:'confirmed',
        applicants:req.body.applicants, 
        feedback:req.body.feedback
      });
      console.log(newEvent)
    }
    catch(error) {
    console.log('Could not create event')
    }
},

// Get the pending events 
GetPendingEvents: async (req,res) => {
  try{
    const pendingevents = await Event.find(Event.approvalstatus='pending');
    res.json({ data: pendingevents });

  }
  catch(error) {
   console.log(error) 
   }
},



// Admin confirm partenr's request
ConfirmRequest: async (req,res) => {
   try{
        var Eid = req.params.id
        var findEvent = await Event.findById(Eid)
        findEvent.approvalstatus = 'confirmed'
        Event.updateOne({id,Eid},findEvent)
    

   }
   catch(error) {
    console.log(error) 
    }
}

}
router.post('/:Aid',functions.CreateEvent)
router.post('/:Pid',functions.RequestEvent)
router.post('/:Eid',functions.ConfirmRequest)
router.post('/',functions.GetPendingEvents)
module.exports = functions;