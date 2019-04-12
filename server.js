const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = require('./Start/config/keys').mongoURI
const Logger = require('./Start/middleware/Logger')
const passport = require('passport')
const cors = require('cors')

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)


// Connect to mongo
mongoose
  .connect('mongodb+srv://isanad:sebastien300@cluster0-ny6mj.mongodb.net/test?retryWrites=true')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err))

// Init middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use((request, response, next) => {
  Logger.log(`${request.method} => ${request.originalUrl}`)
  next()
})

const applications = require('./Start/Routes/api/applications')
const partners = require('./Start/Routes/api/partners')
const events = require('./Start/Routes/api/events')
const users = require('./Start/Routes/api/users')
const bookings = require('./Start/Routes/api/bookings')
const candidates = require('./Start/Routes/api/candidates')
const feedbacks = require('./Start/Routes/api/feedbacks')
const notifications = require('./Start/Routes/api/notifications')
const tasks = require('./Start/Routes/api/tasks')
const consultants = require('./Start/Routes/api/consultants')

// shows a message on the homepage indicated by '/' directory
app.get('/', (req, res) => {
  res.send(`<h1>Welcome Team404</h1>
  <a href ="/Routes/api/applications/">Applications</a>
  <a href ="/Routes/api/Partners">Partners</a>
  <a href ="/Routes/api/events">Events</a>
  <a href ="/Routes/api/users">Users</a>
  <a href ="/Routes/api/bookings">Bookings</a>
  <a href ="/Routes/api/candidates">Candidates</a>
  <a href ="/Routes/api/feedbacks">Feedbacks</a>
  <a href ="/Routes/api/notifications">Notifications</a>
  <a href ="/Routes/api/tasks">Tasks</a>
  <a href ="/Routes/api/consultants">Consultants</a> 
 `)
})

 app.get('/test', (req,res) => res.send(`<h1>Deployed on Heroku</h1>`))

app.use('/Routes/api/applications/', applications)
app.use('/Routes/api/partners', partners)
app.use('/Routes/api/events', events)
app.use('/Routes/api/users', users)
app.use('/Routes/api/bookings', bookings)
app.use('/Routes/api/candidates', candidates)
app.use('/Routes/api/feedbacks', feedbacks)
app.use('/Routes/api/notifications', notifications)
app.use('/Routes/api/tasks', tasks)
app.use('/Routes/api/consultants', consultants)

app.use((req, res) => {
  res.status(404).send({ err: 'We can not find what you are looking for' })
})

// opens the port at 3000
app.listen(process.env.PORT || 3001, function () {
  console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env)
})
