const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const functions = {
    getFeedbacks: async (id) => {
        const feedbacks = await axios.get(`http://localhost:3000/api/feedbacks/${(id) ? id : ''}`);
        return feedbacks;
    },
    updateFeedback: async (id) => {
        const feedback = await axios.put(`http://localhost:3000/api/feedbacks/${id}`, {
            event: 'ayy'
        });
        return feedback;
    },
    deleteFeedback: async (id) => {
        const res = await axios.delete(`http://localhost:3000/api/feedbacks/${id}`);
        return res.message;
    },
    createFeedback: async () => {
        const candidate = await axios.post('http://localhost:3000/api/candidates', {
            age: 23,
            skills: 'Tatbeel',
            interests: 'Being a Metabelaty',
            pasteventsandtasks: 'lmao wtf is this',
            reviewsrecieved: 'plenty'
        });
        const feedback = await axios.post('http://localhost:3000/api/feedbacks', {
            event: 'Shitty Jam Session',
            response: 'Hell Yeah totes amazing',
            name: 'Bruh'
        });
        return feedback;
    }
}

module.exports = functions;