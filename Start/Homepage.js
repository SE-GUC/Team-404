const express = require('express')
const mongoose = require('mongoose')

// Create the app
const app = express();
// Use it with post
app.use(express.json());
const applications = require("./Routes/api/applications");
const partners = require("./Routes/api/partners");
const events = require("./Routes/api/events");
const users = require("./Routes/api/users");
const bookings = require("./Routes/api/bookings");
const candidates = require("./Routes/api/candidates");
const feedbacks = require("./Routes/api/feedbacks");
const notifications = require("./Routes/api/notifications");
const tasks = require("./Routes/api/tasks");

const db = require('./config/keys').mongoURI

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

app.use("/api/applications" , applications);
app.use("/api/partners" , partners);
app.use("/api/events" , events);
app.use("/api/users" , users);
app.use("/api/bookings" , bookings);
app.use("/api/candidates" , candidates);
app.use("/api/feedbacks" , feedbacks);
app.use("/api/notifications" , notifications);
app.use("/api/tasks" , tasks);

app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

//opens the port at 3000
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
