
const express = require('express')
const router = express.Router()
const app = express()
app.use(express.json())


// We will be connecting using database 
const Booking = require('../../models/Booking')

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




//create a booking 
router.post('/', (req, res) => {
    const event = req.body.event
    const partner = req.body.partner
    const attendee = req.body.attendee
    const dateofbooking = req.body.dateofbooking
    
    const booking = new Booking(event, partner, attendee, dateofbooking)    
       
    bookings.push(booking)
    return res.json({data: booking})

})



//delete a booking 
router.delete('/:id', (req, res) => {
    const bookingId = req.body.id 
    const booking = bookings.find(booking => booking.id === bookingId)
    const index = bookings.indexOf(booking)
    bookings.splice(index,1)
    res.send(bookings)
})

module.exports = router

//app.listen(port, () => console.log(`Listening on port ${port}`));

