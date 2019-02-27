// Import express
const express = require("express");
// Create the app
const app = express();
// Use it with post
app.use(express.json());

const notifications = require("./Routes/api/notifications");

//shows a message on the homepage indicated by '/' directory
app.get("/", (req, res) => {
  res.send(`<h1>Welcome Team404</h1>
 <a href ="api/notifications">notifications</a>
 `);
});

app.use("/api/notifications" , notifications);


app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

//opens the port at 3000
const port = process.env.PORT | 3000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));
