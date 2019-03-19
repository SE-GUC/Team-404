
// temporary data created as if it was pulled out of the database ...
//const uuid = require('uuid')
const express = require("express");
// Create the app
const app = express();
// Use it with post
app.use(express.json());

const router = express.Router()
const Notification = require('../../Models/Notification')


const notifications = [
    new Notification('notification text 1'),
    new Notification('notification text 2'),
    new Notification('notification text 3'),
    new Notification('notification text 4')
    
];

router.get('/', (req, res) => res.json({ data: notifications }))

router.get('/:id', (req, res) => {
    const notificationId = req.params.id
    const notify = notifications.find(Notification => Notification.id === notificationId)
    res.send(notify)
});

router.post('/', (req, res) => {
	const text = req.body.text;

	if (!text) return res.status(400).send({ err: 'notification text required' });
	if (typeof text !== 'string') return res.status(400).send({ err: 'Invalid value for text' });
	
	
	const newNotification = new Notification(text) 
		
	

	notifications.push(newNotification)
	return res.json({ data: newNotification });
	
});

router.delete('/:id',(req,res) =>{
	const notificationID = req.body.id
	const newNotification = notifications.find(newNotification => newNotification.id === notificationID)
	const index  = notifications.indexOf(newNotification)
	notifications.splice(index,1)
	res.send(notifications)
})


module.exports = router
