const eventsFunctions = require('./eventsFunctions');
const Event = require('../../Models/Event')


  test("Creating an event", async() =>{
      expect.assertions(2);
      const response = await events.get();
      const oldLength = response.data.length;
      const response1 = await events.post({
        'requestid': "16",
        'eventname': "Fun",
        'organizer': "Hagar",
        'location': "Home",
        'remainingplaces':"1",
        'speakers': "Omar",
        'maximumplaces': "1",
        'topicscovered': "Clara",
        'feedbackid': "20",
        'field': "funfuna",
        'registrationprice':"15",
        'approvalstaus':"pending",
      });
expect(response1.data.msg).toEqual('event was created successfully');
const response2 = await events.get();
expect(response2.data.length).toEqual(oldLength + 1)
  
  },100000);

  test("Deleting an event", async() =>{
    expect.assertions(2);
    const response = await events.get();
    const oldLength = response.data.length;
    var id = '5c96823a583c240d2ba85c25'
    const response1 = await events.delete(id)({ 
    });
expect(response1.data.msg).toEqual('event was deleted successfully');
const response2 = await events.get();
expect(response2.data.length).toEqual(oldLength - 1)

},100000);