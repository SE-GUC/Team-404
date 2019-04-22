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
  getPartners: async () => {
    const partners = await axios.get("http://localhost:3001/Routes/api/users/partners")
    return partners
  },
  getConsultants: async () => {
    const consultants = await axios.get("http://localhost:3001/Routes/api/users/consultants")
    return consultants
  },
  getCandidates: async () => {
    const candidates = await axios.get("http://localhost:3001/Routes/api/users/candidates")
    return candidates
  },      
}
module.exports = functions;