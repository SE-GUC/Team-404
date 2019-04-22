const Event = require('../../Models/Event')
const events = require('./api/events');
let newEvent;


test('create a new Event', async () => {
    const newEvent = await events.post();
    expect(newEvent.eventName).toBe('name');
    newEvent = newEvent;
})


 test('get all events', async () => {
    const vnt = await events.get();
    expect(Array.isArray(vnt)).toBe(true);
});

test('get a specific Event', async (id) => {
    const id = newEvent.id
    const _event = await events.get(id);
    expect(_event.id).toBe(newEvent.id);
});


test('update a specific Event', async (id) => {
    const id = newEvent.id
    const _event = await events.put(id);
    expect(_event.eventName).toBe('updated name');
});

test('delete a specific Event', async (id) => {
    const id = newEvent.id
    const message = await events.delete(id);
    expect(message).toBe('Event was deleted successfully');
});