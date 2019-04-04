const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const consultantFunctions = {
    getConsultants: async() =>{
        const consultants = await axios.get("http://localhost:3000/api/consultants/");
        return consultants;
    },

    getConsultantsByID: async(id) =>{
        const consultant = await axios.get("http://localhost:3000/api/consultants/"+id);
        return consultant;
    },
    
    deleteConsultant: async(id) =>{
        const consultant = await axios.delete("http://localhost:3000/api/consultants" +id);
        return consultant.message;
    },
    
    updateConsultant: async (id) => {
        const consultant = await axios.put("http://localhost:3000/api/consultants/"+id, {
            name: 'ay haga'
        });
        return consultant;
    },

    createConsultant: async () => {
        const consultant = await axios.post("http://localhost:3000/api/consultants", {
        name: "test",
        email: "test@gmail.com",
        password: "abctest",
        board: ["test member"],
        pastEvents: ["test event"],
        reports: ["test report"]
        });
        return consultant;
    }
}
module.exports = consultantFunctions;