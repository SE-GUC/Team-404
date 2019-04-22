const axios = require('axios')
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'

const functions = {

  // User registration testing
  createPartner: async () => {
    const notifPartner = await axios.post(
      'http://localhost:3001/Routes/api/users/',
      {
        name: 'notifPartner',
        password: '123456789',
        email: 'ismail.aboulela@gmail.com',
        age: 21,
        username: 'notifPartner',
        phoneNumber: 123456789,
        userType: 'Partner',
        location: 'GUC',
        board: [''],
        pastEvents: [''],
        reports: [''],
        organisationName: 'notifTesting',
        businessPartners: [''],
        eventsOrganized: [''],
        fieldOfWork: 'asdf',
        projectHistory: ['']
      }
    )
    return notifPartner
  },
  createAdmin: async () => {
    const notifAdmin = axios.post(
      'http://localhost:3001/Routes/api/users/',
      {
        name: 'notifAdmin',
        password: '123456789',
        email: 'ismail.aboulela@gmail.com',
        age: 21,
        username: 'notifAdmin',
        phoneNumber: 123456789,
        userType: 'Admin',
        location: 'GUC'
      }
    )
    return notifAdmin
  },
  createCandidate: async () => {
    const notifCandidate = axios.post(
      'http://localhost:3001/Routes/api/users/',
      {
        name: 'notifCandidate',
        password: '123456789',
        email: 'ismail.aboulela@gmail.com',
        age: 21,
        username: 'notifCandidate',
        phoneNumber: 123456789,
        userType: 'Candidate',
        location: 'GUC',
        skills: [''],
        interests: [''],
        pastEventsAndTasks: [''],
        reviewsRecieved: ['']
      }
    )
    return notifCandidate
  },

  // Event functionality notification testing
  createEvent: async () => {
    const newEvent = await axios.post(
      'http://localhost:3001/Routes/api/events/',
      {
        eventName: 'Dell',
        organizer: 'Clara Atef',
        location: 'Helioplis',
        description: 'Coding competition',
        remainingPlaces: 5,
        speakers: 'Hagar Abdel-Nabi',
        maximumPlaces: 7,
        topicsCovered: 'java',
        field: 'programming',
        registrationPrice: 100,
        approvalStatus: 'approved',
        applicants: [''],
        feedback: ['']
      }
    )
    return newEvent
  },
  createBooking: async () => {
    const res = await axios.post(
      'http://localhost:3001/Routes/api/events/5cb91060941f42146867a0ca/users/5cb0f11c72d17e4c380fa774'
    )
    return res
  },
  adminCreateEvent: async () => {
    const newEvent = await axios.post(
      'http://localhost:3001/Routes/api/events/5cb0f11c72d17e4c380fa774/adminCreateEvent',
      {
        eventName: 'Admin Event',
        organizer: 'Clara Atef',
        location: 'Helioplis',
        description: 'Coding competition',
        remainingPlaces: 5,
        speakers: 'Hagar Abdel-Nabi',
        maximumPlaces: 7,
        topicsCovered: 'java',
        field: 'programming',
        registrationPrice: 100,
        approvalStatus: 'approved',
        applicants: [''],
        feedback: ['']
      }
    )
    return newEvent
  },
  requestEvent: async () => {
    const newEvent = await axios.post(
      'http://localhost:3001/Routes/api/events/5cb0f3d0bc346433a4e1699f/requestEvent',
      {
        eventName: 'Partner Event',
        organizer: 'Clara Atef',
        location: 'Helioplis',
        description: 'Coding competition',
        remainingPlaces: 5,
        speakers: 'Hagar Abdel-Nabi',
        maximumPlaces: 7,
        topicsCovered: 'java',
        field: 'programming',
        registrationPrice: 100,
        approvalStatus: 'approved',
        applicants: [''],
        feedback: ['']
      }
    )
    return newEvent
  },
  confirmRequest: async _id => {
    const event = await axios.put(
      'http://localhost:3001/Routes/api/events/5cba165d3c93f1163884afe4/confirmRequest',
      {
        approvalStatus: 'approved'
      }
    )
    return event
  }

  // Task functionality notification testing

}
