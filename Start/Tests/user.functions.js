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
  }
}
  module.exports = functions;