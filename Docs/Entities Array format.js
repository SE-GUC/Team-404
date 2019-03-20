
const User =[{name: "", id: "", username:"", password: "", email:"", dateofregistration: "", phonenumber:"", usertype:"",
location: ""},];

//inherited from user
const Partners =[{organisationname: "", basicinformation:"", partners:"", boardmembers:"", eventsorganized:"", fieldofwork:"",
                  projecthistory:"", feedbackform:"" },]; 

//inherited from user
const Admins =[{},]; 

//inherited from user
const Candidates =[{age:"", skills:"", interests:"", pasteventstasks:"", reviewsrecieved:"", certificatesandmasterclasses:""},];

const Events =[{organizer:"", location:"", description:"",
 registrationprice:"", remainingplaces:"", speakers:"", maximumplaces:"", topicscovered:"",
                feedbackid:"", field:"", approvalstatus:""},];

const Tasks =[{Description:"", eta:"", levelofcommitment:"", partner:"", monetarycompensation:"", skills:"", consutancy:"",
               lifecyclestatus:"", experienceneeded:""},];

const Notifications =[{sender:"", reciever:"", time:"", type:"", message:""},];

const Bookings =[{event:"", partner:"", attendee:"", dateofbooking:"", bookingnumber:""},];

const Applications =[{candidate:"", partner:"", datetime:"", task:"", status:""},];

const Feedbacks =[{id:"", response:"", name:""},];




