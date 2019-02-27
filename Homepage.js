// Import express
const express = require("express");
// Create the app
const app = express();
// Use it with post
app.use(express.json());
const applications = require("./Routes/api/applications");
const partners = require("./Routes/api/partners");
const events = require("./Routes/api/events");
const users = require("./Routes/api/users");

//shows a message on the homepage indicated by '/' directory
app.get("/", (req, res) => {
  res.send(`<h1>Welcome Team404</h1>
 <a href ="api/applications">Applications</a>
 <a href ="api/Partners">Partners</a>
 <a href ="api/events">Events</a>
 <a href ="api/users">Users</a>
 `);
});

app.use("/api/applications" , applications);
app.use("/api/partners" , partners);
app.use("/api/events" , events);
app.use("/api/users" , users);


app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

//opens the port at 3000
const port = process.env.PORT | 3000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));
