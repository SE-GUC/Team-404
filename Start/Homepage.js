// Import express
const express = require("express");
// Create the app
const app = express();
// Use it with post
app.use(express.json());

const notifications = require("./Routes/api/notifications");
const bookings = require("./Routes/api/bookings");
const events = require("./Routes/api/events");
const users = require("./Routes/api/users");

//shows a message on the homepage indicated by '/' directory
app.get("/", (req, res) => {
  res.send(`<h1>Welcome Team404</h1>
 <a href ="api/notifications">notifications</a>
 <a href ="api/bookings">bookings</a>
 <a href ="api/events">events</a>
 <a href ="api/users">users</a>
 `);
});


app.use("/api/notifications" , notifications);
app.use("/api/bookings" , bookings);
app.use("/api/events" , events);
app.use("/api/users" , users);



const port = process.env.PORT | 3000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));
