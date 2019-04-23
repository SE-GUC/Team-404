const axios = require("axios");
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const functions = {
  // User registration testing
  createPartner: async () => {
    const notifPartner = await axios.post(
      "http://localhost:3001/Routes/api/users/",
      {
        name: "notifPartner",
        password: "123456789",
        email: "ismail.aboulela@gmail.com",
        age: 21,
        username: "notifPartner",
        phoneNumber: 123456789,
        userType: "Partner",
        location: "GUC",
        board: [""],
        pastEvents: [""],
        reports: [""],
        organisationName: "notifTesting",
        businessPartners: [""],
        eventsOrganized: [""],
        fieldOfWork: "asdf",
        projectHistory: [""]
      }
    );
    return notifPartner;
  },
};
module.exports = functions;