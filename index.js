const express = require("express");
const app = express();
<<<<<<< HEAD:Start/Homepage.js
const mongoose = require('mongoose')
const db = require('./config/keys').mongoURI

// Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const applications = require("./Routes/api/applications");
/*const partners = require("./Routes/api/partners");
const events = require("./Routes/api/events");
const users = require("./Routes/api/users");
const bookings = require("./Routes/api/bookings");
const candidates = require("./Routes/api/candidates");
const feedbacks = require("./Routes/api/feedbacks");
const notifications = require("./Routes/api/notifications");
const tasks = require("./Routes/api/tasks");
*/
=======
// Use it with post
app.use(express.json());
const applications = require("./Start/Routes/api/applications");
const partners = require("./Start/Routes/api/partners");
const events = require("./Start/Routes/api/events");
const users = require("./Start/Routes/api/users");
const bookings = require("./Start/Routes/api/bookings");
const candidates = require("./Start/Routes/api/candidates");
const feedbacks = require("./Start/Routes/api/feedbacks");
const notifications = require("./Start/Routes/api/notifications");
const tasks = require("./Start/Routes/api/tasks");

>>>>>>> a549af3216a29924ba905f690dd5af7e5641337e:index.js

//shows a message on the homepage indicated by '/' directory
app.get("/", (req, res) => {
  res.send(`<h1>Welcome Team404</h1>
 <a href ="api/applications">Applications</a>
 <a href ="api/Partners">Partners</a>
 <a href ="api/events">Events</a>
 <a href ="api/users">Users</a>
 <a href ="api/bookings">Bookings</a>
 <a href ="api/candidates">Candidates</a>
 <a href ="api/feedbacks">Feedbacks</a>
 <a href ="api/notifications">Notifications</a>
 <a href ="api/tasks">Tasks</a>
 `);
});

//app.get('/test', (req,res) => res.send(`<h1>Deployed on Heroku</h1>`))

app.use("/api/applications" , applications);
/*app.use("/api/partners" , partners);
app.use("/api/events" , events);
app.use("/api/users" , users);
app.use("/api/bookings" , bookings);
app.use("/api/candidates" , candidates);
app.use("/api/feedbacks" , feedbacks);
app.use("/api/notifications" , notifications);
app.use("/api/tasks" , tasks);
*/
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

//opens the port at 3000
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
