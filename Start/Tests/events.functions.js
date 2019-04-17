const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const functions = {
    getEvents: async () => {
        const events = await axios.get('http://localhost:3001/Routes/api/events/')
        return events
    },
    updateEvent: async (_id) => {
        const event = await axios.put('http://localhost:3001/Routes/api/events/5cb70f0677ccd5710821236a', {
            eventName: 'java'
        });
        return event;
    },
    deleteEvent: async (_id) => {
        const res = await axios.delete('http://localhost:3001/Routes/api/events/5cb717c277ccd571082123c1');
        return res.message;
    },
    createEvent: async () => {
        const newEvent = await axios.post('http://localhost:3001/Routes/api/events/', {
          eventName: "anything",
          organizer: "anything",
          location: "anything",
          description: "anything",
          remainingPlaces: 5,
          speakers: "anyone",
          maximumPlaces: 7,
          topicsCovered: "java",
          field: "programming",
          registrationPrice: 100,
          approvalStatus: "approved",
          applicants: [""],
          feedback: [""]
          
        });
        return newEvent;
    }
}

module.exports = functions;