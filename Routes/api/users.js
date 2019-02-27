// Dependencies
const express = require('express');
const Joi = require('joi');
//const uuid = require('uuid');
const router = express.Router();

// Models
const User = require('../../models/User');

// temporary data created as if it was pulled out of the database ...
const users = [
    new User('Islam Sanad','isanad','whatsup123','islam.sanad@student.guc.edu.eg','','1234','Partner','Shrouk , Cairo'),
    new User('Ismail Aboulela','ismailaboulela','sup123','ismail.aboulela@student.guc.edu.eg','','5678','Partner','GUC , Cairo'),
	new User('Gomana El-Shimy', 'gomanaelshimy','gello2222','gomanaelshimy@student.guc.edu.eg','','33312','Partner','Maadi , Cairo'),
	new User('Omar Yasser','omaryasser','hiyo123123','omaryasser@student.guc.edu.eg','','1342','Admin','Madinet Nasr , Cairo'),
    new User('Clara Kamel','clarakamel','heeey33312','clarakamel@student.guc.edu.eg','','8979','Admin','Helwan , Helwan'),
    new User('Hania Ghannam','haniaghannam','hii123123','haniaghannam@student.guc.edu.eg','','432312')
];

// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200

// Get all users
router.get('/', (req, res) => res.json({ data: users }));

// Create a new user

module.exports = router;