const axios = require("axios");
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const functions = {
  getUsers: async () => {
    const users = await axios.get("http://localhost:3001/Routes/api/users/")
    return users
  },
  getSpecificUser: async () => {
    const user = await axios.get("http://localhost:3001/Routes/api/users/5cb1eee8b3197064e88727bf")
    return user
  },
}
module.exports = functions;