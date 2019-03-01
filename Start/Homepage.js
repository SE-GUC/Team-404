// Import express
const express = require("express")
const uuid = require('uuid')
// Create the app
const app = express()
// Use it with post
app.use(express.json())

//shows a message on the homepage indicated by '/' directory
const tasks = require ("./Routes/api/tasks")

app.get("/" ,(req,res) => {
  res.send(`<h1>Welcome Team404</h1> <a href = "api/tasks"> tasks </a>`)
  
}
)

app.use("/api/tasks",tasks);

app.use ((req,res)=>{
  res.status(404).send({err:"we cannot find what you're looking for"})
})

//opens the port at 3000
const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
