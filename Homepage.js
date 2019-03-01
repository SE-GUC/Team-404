// Import express
const express = require("express");
// Create the app
const app = express();
// Use it with post
app.use(express.json());
const bookings = require("./Routes/api/bookings");

//shows a message on the homepage indicated by '/' directory
app.get("/", (req, res) => {
  res.send(`<h1>Welcome Team404</h1>
 <a href ="api/bookings">bookings</a> `);
});

app.use("/api/bookings" , bookings);


//app.use((req, res) => {
  //  res.status(404).send({err: 'We can not find what you are looking for'});
 //})

//opens the port at 3000
const port = process.env.PORT | 6070;
app.listen(port, () => console.log(`Server up and running on port ${port}`));
