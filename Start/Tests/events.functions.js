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
      
      eventName: req.body.eventName,
      organizer: Pid,
      location: req.body.location,
      remainingPlaces:req.body.remainingPlaces,
      speakers:req.body.speakers,
      maximumPlaces:req.body.maximumPlaces,
      topicsCovered:req.body.topicsCovered,
      field:req.body.field,
      registrationPrice:req.body.registrationPrices,
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
        
        eventName: req.body.eventName,
        organizer: Aid,
        location: req.body.location,
        remainingPlaces:req.body.remainingPlaces,
        speakers:req.body.speakers,
        maximumPlaces:req.body.maximumPlaces,
        topicsCovered:req.body.topicsCovered,
        field:req.body.field,
        registrationPrice:req.body.registrationPrices,
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
    const pendingevents = await Event.find(Event.approvalStatus='pending');
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
        findEvent.approvalStatus = 'confirmed'
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