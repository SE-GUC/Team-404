const funcs = require('./events.functions');
let event;
test('post new event', async () => {
    const response = await funcs.createEvent()
    expect(response.data.data.field).toEqual('programming');
});

test('get all events', async () => {
    const events = await funcs.getEvents();
    expect(events).not.toBeNull();
});

// test('get specific event', async () => {
//     const _event = await funcs.getEvents(event.id);
//     expect(_event.id).toBe(event.id);
// });


test('update specific event', async () => {
    const _event = await funcs.updateEvent();
    console.log(_event);
    expect(_event.data.data.eventName).toEqual('java');
});

test('delete specific event', async () => {
    const message = await funcs.deleteEvent();
    console.log(message);
    expect(message).toEqual('Event was deleted successfully');
});

