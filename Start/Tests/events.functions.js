const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const functions = {
    getEvents: async () => {
        const events = await axios.get('http://localhost:3001/Routes/api/events/')
        return events
    },
    updateEvent: async (_id) => {
        const event = await axios.put('http://localhost:3001/Routes/api/events/5cb70f0677ccd5710821236a', {
            eventName: 'java'
        });
        return event;
    },
    deleteEvent: async (_id) => {
        const res = await axios.delete('http://localhost:3001/Routes/api/events/5cb717c277ccd571082123c1');
        return res.message;
    },
    createEvent: async () => {
        const newEvent = await axios.post('http://localhost:3001/Routes/api/events/', {
          eventName: "anything",
          organizer: "anything",
          location: "anything",
          description: "anything",
          remainingPlaces: 5,
          speakers: "anyone",
          maximumPlaces: 7,
          topicsCovered: "java",
          field: "programming",
          registrationPrice: 100,
          approvalStatus: "approved",
          applicants: [""],
          feedback: [""]
          
        });
        return newEvent;
    },
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
},
viewEvents = async () => { 
    try {
        var view = await Event.find()
          return view
          
        
        
        
    }
    
    catch(err) {
    // handle any possible error and exit gracefully 
    console.log(err)
    }
    
  },
  bookEvent = async (req,res) => { 
    try {
      var cid = req.params.id
      var eid = req.params.id
  
       console.log("success")
       
       var candidate = await Candidate.findById(cid).exec();
       var event = await Event.findById(eid).exec();
       candidate.pastEvents.push(eid);
  
  
       var newBooking = new Booking({
         event: eid,
         partner: req.body.partner,
         attendee: cid,
         dateofbooking: req.body.dateofbooking
       });
       console.log(newBooking);
       var findEvent = Event.findById(eid)
       findEvent.remainingPlaces -= 1
       Event.updateOne({id: eid}, findEvent)
       }
  
   catch(err) {
   console.log("couldn't book")
   }
}  
}
router.get('/', viewEvents)
router.post('/:cid/events/:eid', bookEvent)
router.post('/:Aid',functions.CreateEvent)
router.post('/:Pid',functions.RequestEvent)
router.post('/:Eid',functions.ConfirmRequest)
router.post('/',functions.GetPendingEvents)
module.exports = functions;