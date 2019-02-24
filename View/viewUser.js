// Import express
const express = require('express')
// Create the app
const app = express()
// Use it with post
app.use(express.json())

const User =[
{name: "Islam Sanad", id: "40-905", username:"isanad", password: "whatsup123", email:"islam.sanad@student.guc.edu.eg", dateofregistration: "", phonenumber:"1234", usertype:"Partner",
location: "Shrouk , Cairo" },
{name: "Ismail Aboulela", id: "40-15364", username:"ismailaboulela", password: "sup123", email:"ismail.aboulela@student.guc.edu.eg", dateofregistration: "", phonenumber:"5678", usertype:"Partner",
location: "GUC , Cairo" },
{name: "Gomana El-Shimy", id: "40-1712", username:"gomanaelshimy", password: "gello2222", email:"gomanaelshimy@student.guc.edu.eg", dateofregistration: "", phonenumber:"33312", usertype:"Partner",
location: "Maadi , Cairo" },

{name: "Omar Yasser", id: "40-17331", username:"omaryasser", password: "hiyo123123", email:"omaryasser@student.guc.edu.eg", dateofregistration: "", phonenumber:"1342", usertype:"Admin",
location: "Madinet Nasr , Cairo" },
{name: "Clara Kamel", id: "40-690", username:"clarakamel", password: "heeey33312", email:"clarakamel@student.guc.edu.eg", dateofregistration: "", phonenumber:"8979", usertype:"Admin",
location: "Helwan , Helwan" },
{name: "Hania Ghannam", id: "37-3641", username:"haniaghannam", password: "hii123123", email:"haniaghannam@student.guc.edu.eg", dateofregistration: "", phonenumber:"432312", usertype:"Admin",
location: "90st, Cairo" },

{name: "Karim El-Mahdy", id: "40-2564", username:"karimelmahdy", password: "eyyy123123", email:"karimelmahdy@student.guc.edu.eg", dateofregistration: "", phonenumber:"585858", usertype:"Candidate",
location: "Rehab, Cairo" },
{name: "Hagar Abdelnabi", id: "40-14905", username:"hagarabdelnabi", password: "ayy45645", email:"hagarabdelnabi@student.guc.edu.eg", dateofregistration: "", phonenumber:"777123", usertype:"Candidate",
location: "Abbas, Cairo" },
{name: "Lobna El-Badrawy", id: "40-15177", username:"lobnaelbadrawy", password: "girlz2313", email:"lobnaelbadrawy@student.guc.edu.eg", dateofregistration: "", phonenumber:"451123", usertype:"Candidate",
location: "Makram , Cairo" },
];

//(inherited from user)
const Partners =[
{organisationname: "ABC", basicinformation:"a basic china", partners:"isanad", boardmembers:"jason momoa", eventsorganized:"join the aquas", fieldofwork:"art", projecthistory:"", feedbackform:"" },
{organisationname: "XYZ", basicinformation:"anything", partners:"ismailaboulela", boardmembers:"rob stark", eventsorganized:"kill the lannistors", fieldofwork:"bladesmith", projecthistory:"", feedbackform:"" },
{organisationname: "QWERTY", basicinformation:"abilities", partners:"gomanaelshimy", boardmembers:"direwolf", eventsorganized:"im lonely", fieldofwork:"tech", projecthistory:"", feedbackform:"" }
]; 

//(inherited from user)
const Admins =[{},]; 

//(inherited from user)
const Candidates =[
{age:"18", skills:"cooking, driving , photoshop", interests:"food , cars", pasteventsandtasks:"photoshop for everyone", reviewsrecieved:"" },
{age:"20", skills:"Microsoft , Dancing , Singing , coding", interests:"music , anime", pasteventsandtasks:"be a programmer", reviewsrecieved:"" },
{age:"22", skills:"Drawing , Reading , Leading, hitman", interests:"history", pasteventsandtasks:"kill me,", reviewsrecieved:"" }]; 

const Events =[
{ID:"5", name:"photoshop for everyone", organizer:"Islam Sanad", location:"Basement", description:"come learn PS", registrationprice:"125", remainingplaces:"0", speakers:"Helen", maximumplaces:"2", topicscovered:"photoshop", feedbackid:"", field:"Design", approvalstatus:"Accepted" },
{ID:"7", name:"be a programmer",organizer:"Hania Ghannam", location:"Roof", description:"funamenetals java", registrationprice:"100", remainingplaces:"5", speakers:"Hania , mohammed", maximumplaces:"10", topicscovered:"java", feedbackid:"", field:"CS", approvalstatus:"Rejected" },
{ID:"6", name:"design fundementals",organizer:"Clara Kamel", location:"GUC", description:"editing layers", registrationprice:"250", remainingplaces:"2", speakers:"abdelsalam", maximumplaces:"5", topicscovered:"photoshop", feedbackid:"", field:"Art", approvalstatus:"NA" }
];

const Tasks =[
{ID:"1",Description:"help me", eta:"2 days", levelofcommitment:"low", partner:"isanad", monetarycompensation:"400", skills:"Microsoft",  lifecyclestatus:"pending", experienceneeded:"0"},
{ID:"2",Description:"kill me", eta:"1 month", levelofcommitment:"high", partner:"gomanaelshimy", monetarycompensation:"5000", skills:"hitman",  lifecyclestatus:"done", experienceneeded:"5"},
{ID:"3",Description:"feed me", eta:"3 hours", levelofcommitment:"low", partner:"gomanaelshimy", monetarycompensation:"3000", skills:"Chef",  lifecyclestatus:"in progress", experienceneeded:"3"},
{ID:"4",Description:"drive me", eta:"1 year", levelofcommitment:"high", partner:"ismailaboulela", monetarycompensation:"10000", skills:"Driving",  lifecyclestatus:"in progress", experienceneeded:"2"},
];

const Notifications =[
{ID:"5",sender:"Ismail Aboulela", reciever:"Hagar Abdelnabi", time:"1:00", type:"accept/reject", message:"hello"},
{ID:"6",sender:"Gomana El-Shimy", reciever:"Hagar Abdelnabi", time:"1:01", type:"normal", message:"hi"},
{ID:"8",sender:"Islam Sanad", reciever:"Karim El-Mahdy", time:"1:02", type:"normal", message:"hey"},
{ID:"9",sender:"Ismail Aboulela", reciever:"Lobna El-Badrawy", time:"1:03", type:"accept/reject", message:"hola"}
];

const Bookings =[
{ID:"1",event:"photoshop for everyone", partner:"Islam Sanad", attendee:"Lobna El-Badrawy", dateofbooking:"4/3/2018"},
{ID:"4",event:"photoshop for everyone", partner:"Hania Ghannam", attendee:"Omar Yasser", dateofbooking:"4/3/2018"},
{ID:"5",event:"design fundementals", partner:"Clara Kamel", attendee:"Karim El-Mahdy", dateofbooking:"18/5/2018"},
{ID:"6",event:"be a programmer", partner:"Hania Ghannam", attendee:"Omar Yasser", dateofbooking:"4/3/2018"},
{ID:"7",event:"design fundementals", partner:"Clara Kamel", attendee:"Karim El-Mahdy", dateofbooking:"18/5/2018"},
{ID:"9",event:"be a programmer", partner:"Hania Ghannam", attendee:"Omar Yasser", dateofbooking:"4/3/2018" },
{ID:"65",event:"design fundementals", partner:"Clara Kamel", attendee:"Karim El-Mahdy", dateofbooking:"18/5/2018" },
{ID:"2",event:"be a programmer", partner:"Hania Ghannam", attendee:"Omar Yasser", dateofbooking:"4/3/2018" },
{ID:"12",event:"be a programmer", partner:"Clara Kamel", attendee:"Karim El-Mahdy", dateofbooking:"18/5/2018" },
{ID:"3",event:"be a programmer", partner:"Hania Ghannam", attendee:"Omar Yasser", dateofbooking:"4/3/2018" }
];

const Applications =[
{ID:"6",candidate:"Karim El-Mahdy", partner:"Islam Sanad", datetime:"1/7/2018 5:56", task:"help me", status:"pending"},
{ID:"12",candidate:"Karim El-Mahdy", partner:"Islam Sanad", datetime:"9/4/2018 14:00", task:"kill me", status:"accepted"},
{ID:"27",candidate:"Karim El-Mahdy", partner:"Gomana El-Shimy", datetime:"5/5/2018 6:05", task:"feed me", status:"rejected"},
{ID:"90",candidate:"Karim El-Mahdy", partner:"Gomana El-Shimy", datetime:"7/8/2018 2:17", task:"drive me", status:"pending"}
];

const Feedbacks =[
{id:"2", event:"be a programmer", response:"nice event", name:"Hania Ghannam"},
{id:"3", event:"design fundementals",response:"i love this event", name:"Lobna El-Badrawy"}];



/*get user details by username
app.get('/api/User/:username', (req, res) => {
    const userNameIn = req.params.username
    const userDetailOutbyName = User.find(User => User.username === userNameIn)
    res.send(userDetailOutbyName)
})*/

/*get user details by email
app.get('/api/User/:email', (req, res) => {
    const userEmailIn = req.params.email
    const userDetailOutbyEmail = User.find(User => User.email === userEmailIn)
    res.send(userDetailOutbyEmail)
})*/

// Define the port, get it from the enviroment (used in production)
// Or just use 3000
const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))