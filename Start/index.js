// Import express
const express = require('express')
// Create the app
const app = express()
// Use it with post
app.use(express.json())

//shows a message on the homepage indicated by '/' directory
app.get('/' ,(req,res) => {
  res.send('<h1>Welcome Team404</h1>')
}
)

//opens the port at 3000
const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))