const axios = require('axios');

const functions = {
    getAllFeedbacks: async () => {
        const feedbacks = await axios.get('http://localhost:3000/api/feedbacks');
        return feedbacks;
    },
    createFeedback: async () => {
        const candidate = await axios.post('http://localhost:3000/api/candidates', {
            age: 23,
            skills: 'Tatbeel',
            interests: 'Being a Metabelaty',
            pasteventsandtasks: 'lmao wtf is this',
            reviewsrecieved: 'plenty'
        });
        
    }
}

module.exports = functions;