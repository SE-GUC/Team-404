
// temporary data created as if it was pulled out of the database ...
//const uuid = require('uuid')
const express = require("express");
// Create the app
const app = express();
// Use it with post
app.use(express.json());

const router = express.Router()
const Notification = require('../../models/Notification')


const notifications = [
    new Notification('notification text 1'),
    new Notification('notification text 2'),
    new Notification('notification text 3'),
    new Notification('notificatoin text 4')
    
];

router.post('/', (req, res) => {
	const text = req.body.text;

	if (!text) return res.status(400).send({ err: 'notification text required' });
	if (typeof text !== 'string') return res.status(400).send({ err: 'Invalid value for text' });
	

	const newNotification = {
		Notification(text)
		
	};

	notifications.push(newNotification)
	return res.json({ data: newNotification });
	
	
	
});



router.get('/', (req, res) => res.json({ data: notifications }))

module.exports = router
