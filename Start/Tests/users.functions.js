const axios = require("axios");
axios.defaults.headers.post["Content-Type"] =
  "application/application/json";

const functions = {
updateUser: async _id => {
    const user = await axios.put(
      "http://localhost:3001/Routes/api/users/5cb1eee8b3197064e88727bf",
      {
        name: "x"
      }
    );
    return user;
  },
  getUsers: async () => {
    const users = await axios.get("http://localhost:3001/Routes/api/users/")
    return users
  },
  getSpecificUser: async () => {
    const user = await axios.get("http://localhost:3001/Routes/api/users/5cb1eee8b3197064e88727bf")
    return user
  },
  deleteUser: async _id => {
    const res = await axios.delete(`http://localhost:3001/Routes/api/users/5cbe2bf3f9fb6b09946ffddb`);
    return res;
  },



  createUser: async () => {
    
    const newUser = await axios.post(
        'http://localhost:3001/Routes/api/users/register',
      {
        name: "Omar",
        password: "Omar10040090",
        email: "Omarrdr@gmail.com",
        age: 20,
        username: "Omaridadsnos",
        phoneNumber: 1938917318,
        userType:"Candidate",
        location: "Tagamooo",
        skills: "Sleeping and eating",
        interests: "fdsf",
        reviewsRecieved:"fafaf",
        board: [1,23,3],
        pastEvents: [1,3,4,5],
        reports: [2,3,4,3],
        organisationName: "fasd",
        businessPartners: "dadawd",
        eventsOrganized: "3",
        fieldOfWork:"dada",
        projectHistory: "sddsf"
      }
    )
    .then((response) => {
      //console.log(response.data.token);
      return response.data.token;
      })
      .catch((error) => {
          console.log(error);
      });
    return newUser;
  },
 
 

};
  module.exports = functions;