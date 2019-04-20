const axios = require("axios");
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const functions = {
  getEvents: async () => {
    const events = await axios.get("http://localhost:3001/Routes/api/events/");
    return events;
  },
  getSpecificEvent: async () => {
    const event = await axios.get(
      "http://localhost:3001/Routes/api/events/5cb233a3cef46afa8f9bd0f5"
    );
    return event;
  },
  updateEvent: async _id => {
    const event = await axios.put(
      "http://localhost:3001/Routes/api/events/5cb23616cef46afa8f9bd107",
      {
        eventName: "java"
      }
    );
    return event;
  },
  deleteEvent: async _id => {
    const res = await axios.delete(
      "http://localhost:3001/Routes/api/events/5cb85dd38dc4c45764b0b8bf"
    );
    return res;
  },
  createEvent: async () => {
    const newEvent = await axios.post(
      "http://localhost:3001/Routes/api/events/",
      {
        eventName: "Dell",
        organizer: "Islam Sanad",
        location: "Sunrise",
        description: "Coding at sunrise under the beautiful sky",
        remainingPlaces: 5,
        speakers: "Hagar AbdelNabi",
        maximumPlaces: 7,
        topicsCovered: "java",
        field: "programming",
        registrationPrice: 100,
        approvalStatus: "approved",
        applicants: [""],
        feedback: [""]
      }
    );
    return newEvent;
  }
};

module.exports = functions;
