// Import express
const express = require("express");
// Create the app
const app = express();
// Use it with post
app.use(express.json());
const users = require("./Routes/api/users");

//shows a message on the homepage indicated by '/' directory
app.get("/", (req, res) => {
  res.send(`<h1>Welcome Team404</h1>
 <a href ="api/users">users</a>
 `);
});

app.use("/api/users" , users);


// app.use((req, res) => {
//     res.status(404).send({err: 'Whyyyyy ?'});
//  })

//opens the port at 3000
const port = process.env.PORT | 3030;
app.listen(port, () => console.log(`Server up and running on port ${port}`));
