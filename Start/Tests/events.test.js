const funcs = require('./events.functions');
let event;

// test('post new event', async () => {
//     const response = await funcs.createEvent();
//     expect(response.data.data.field).toEqual('programming');
// });

test('get all events', async () => {
    const events = await funcs.getEvents();
    expect(events).not.toBeNull();
});

test('get specific event', async () => {
    const _event = await funcs.getSpecificEvent();
    expect(_event.data.data.eventName).toBe('Arts and Craft');
});

test('update specific event', async () => {
    const _event = await funcs.updateEvent();
    expect(_event.data.data.eventName).toEqual('java');
});

test('delete specific event', async () => {
    const messagee = await funcs.deleteEvent();
    console.log(messagee);
    expect(messagee.data).toEqual("Event was deleted successfully");
});

