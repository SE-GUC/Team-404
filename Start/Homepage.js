// Import express
const express = require('express')
// Create the app
const app = express()
// Use it with post
app.use(express.json())
const candidates = require("./Routes/api/candidates")

//shows a message on the homepage indicated by '/' directory
app.get('/' ,(req,res) => {
  res.send(`<h1>Welcome Team404</h1>
  <a href ="api/candidates">candidates</a>
  `);
}
)

app.use("/api/candidates/" , candidates)
app.get('/' ,(req,res) => {
  res.send(`<h1>Welcome Team404</h1>
  <a href ="api/partners">partners</a>
  `);
}
)

//opens the port at 3000
const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
