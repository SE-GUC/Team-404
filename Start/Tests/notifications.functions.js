const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const functions = {
    getNotifications : async (id) => {
        const  notifications  = await axios.get(`http://localhost:3000/api/notifications /${(id) ? id : ''}`);
        return notifications ;
    },
    deleteNotifications: async (id) => {
        const res = await axios.delete(`http://localhost:3000/api/notifications /${id}`);
        return res.message;
    },
    createNotifications: async () => {
        const Notification = await axios.post('http://localhost:3000/api/notifications', {
            text: 'Testing Creation',
            recipient: 'Testing Creation',
            recipientType: 'Testing Creation',
            trigger: 'Testing Creation'

        });
        return Notification;
    }
}

module.exports = functions;