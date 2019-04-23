const eventFuncs    = require('./events.functions')
const taskFuncs     = require('./tasks.functions')
const notifFuncs    = require('./user.functions')


  
  test('book an event', async () => {
    const res = await eventFuncs.createBooking()
    console.log(res)
    expect(res.data).toEqual('Event has been booked!')
  })
  
  test('cancel an event', async () => {
    const res = await eventFuncs.cancelBooking()
    console.log(res)
    expect(res.data).toEqual('Event booking has been canceled!')
  })
  
  test('partner request event', async () => {
    const message = await eventFuncs.requestEvent()
    console.log(message)
    expect(message.data).toEqual('Event has been requested!')
  })
  
  test('admin create event', async () => {
    const message = await eventFuncs.adminCreateEvent()
    console.log(message)
    expect(message.data).toEqual('Event has been created!')
  })
  
  test('confirm an event', async () => {
    const message = await eventFuncs.confirmRequest()
    expect(message.data).toEqual('Event request has been approved!')
  })


  test('create new task', async () => {
    const response = await taskFuncs.createTask();
    expect(response.data.data.description).toEqual('dummydata1');
})

test('Creating a partner', async() =>{
    const response = await notifFuncs.createPartner();
    expect(response.data.data.email).toEqual(!null);
});
