const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const functions = {
    getBookings: async () => {
        const bookings = await axios.get(`http://localhost:3000/api/bookings/`);
        return bookings;
    },
    updateBooking: async (id) => {
        const booking = await axios.put(`http://localhost:3000/api/bookings/:id`, {
            event: 'anything' 
        });
        return booking;
    },
    deleteBooking: async (id) => {
        const response = await axios.delete(`http://localhost:3000/api/bookings/:id`);
        return response.message;
    },
    createBooking: async () => {
        const booking = await axios.post('http://localhost:3000/api/bookings', {
            event: 'anything',
            partner: 'anything',
            attendee: 'anything',
            dateofbooking: 4-5-2018,
            
        });
        return bookings;
    }
}

module.exports = functions;
