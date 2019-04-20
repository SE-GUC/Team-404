const funcs = require("./events.functions");
let event;

// test('post new event', async () => {
//     const response = await funcs.createEvent();
//     expect(response.data.data.field).toEqual('programming');
// });

test('get all approved events', async () => {
    const events = await funcs.getApprovedEvents();
    expect(events).not.toBeNull();
});

test('get all pending events', async () => {
    const events = await funcs.getPendingEvents();
    expect(events).not.toBeNull();
});

test("get specific event", async () => {
  const _event = await funcs.getSpecificEvent();
  expect(_event.data.data.eventName).toBe("Arts and Craft");
});

test("update specific event", async () => {
  const _event = await funcs.updateEvent();
  expect(_event.data.data.eventName).toEqual("java");
});

test("delete specific event", async () => {
  const messagee = await funcs.deleteEvent();
  console.log(messagee);
  expect(messagee.data).toEqual("Event was deleted successfully");
});

test('book an event', async () => {
    const res = await funcs.createBooking();
    console.log(res);
    expect(res.data).toEqual("Event has been booked!");
});

test('cancel an event', async () => {
    const res = await funcs.cancelBooking();
    console.log(res);
    expect(res.data).toEqual("Event booking has been canceled!");
});

//Hagar backend tests 

test("partner request event", async () => {
  const message = await funcs.requestEvent();
  console.log(message);
  expect(message.data).toEqual("Event has been requested!");
});

test("admin create event", async () => {
  const message = await funcs.adminCreateEvent();
  console.log(message);
  expect(message.data).toEqual("Event has been created!");
});

test("confirm an event", async () => {
  const _event = await funcs.confirmRequest();
  expect(_event.data.data.approvalStatus).toEqual("approved");
});
