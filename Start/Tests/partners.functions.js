const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const functions = {
    getPartners: async (id) => {
        const partners = await axios.get(`http://localhost:3000/api/partners/${(id) ? id : ''}`);
        return partners;
    },
    updatePartner: async (id) => {
        const partners = await axios.put(`http://localhost:3000/api/partners/${id}`, {
            organisationname: 'dummydata'
        });
        return Partner;
    },
    deletePartner: async (id) => {
        const res = await axios.delete(`http://localhost:3000/api/partners/${id}`);
        return res.message;
    },
    createPartner: async () => {
        const partner = await axios.post('http://localhost:3000/api/partners', {
         organisationname: 'dummydata',
         partners: 'dummydata',
         boardmembers: 'dummydata',
         eventsorganized: 'dummydata',
         fieldofwork: 'dummydata',
         projecthistory: 'dummydata',
         Partnerform: 'dummydata'
        });
        return partner;
    }
}

module.exports = functions;