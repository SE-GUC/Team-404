
const express = require('express')
const router = express.Router()

// We will be connecting using database 
//const Book = require('../../models/Book')

// temporary data created as if it was pulled out of the database ...
const bookings = [
    new Booking('photoshop for everyone', 'Islam Sanad', 'Lobna El-Badrawy',4/3/2018 ),
    new Booking('photoshop for everyone', 'Hania Ghannam', 'Omar Yasser', 4/3/2018 ),
    new Booking('design fundementals', 'Clara Kamel', 'Karim El-Mahdy',18/5/2018),
    new Booking('be a programmer', 'Hania Ghannam', 'Omar Yasser', 4/3/2018),
    new Booking('design fundementals', 'Clara Kamel', 'Karim El-Mahdy', 18/5/2018),
    new Booking('be a programmer', 'Hania Ghannam', 'Omar Yasser', 4/3/2018),
    new Booking('design fundementals', 'Clara Kamel', 'Karim El-Mahdy', 18/5/2018),
    new Booking('be a programmer', 'Hania Ghannam', 'Omar Yasser', 4/3/2018),
    new Booking('be a programmer', 'Clara Kamel', 'Karim El-Mahdy', 18/5/2018),
    new Booking('be a programmer', 'Hania Ghannam', 'Omar Yasser',4/3/2018 ),


];

router.get('/', (req, res) => res.json({ data: bookings }))

module.exports = router