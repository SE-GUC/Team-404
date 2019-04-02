const funcs = require('./bookings.functions');
let booking;

test('create a new booking', async () => {
    const booking = await funcs.createBooking();
    expect(booking.event).toBe('anything');
    booking = booking;
})

test('get all bookings', async () => {
    const bookings = await funcs.getBookings();
    expect(Array.isArray(bookings)).toBe(true);
});

test('get a specific booking', async (id) => {
    const _booking = await funcs.getBookings(booking.id);
    expect(_booking.id).toBe(booking.id);
});


test('update a specific booking', async ('/:id') => {
    const _booking = await funcs.updateBooking(booking.id);
    expect(_booking.event).toBe('anything');
});

test('delete a specific booking', async (id) => {
    const message = await funcs.deleteBooking(booking.id);
    expect(message).toBe('Booking was deleted successfully');
});
