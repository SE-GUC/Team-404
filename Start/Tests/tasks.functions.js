const axios = require('axios');
const tasks = require ('../Routes/api/tasks')
const functions = {
        //add: (x,y) => x+y,
       // viewTaskstatus: async () => {
        //const user = await axios.get('http://localhost:3000/api/tasks/')
        //return user
        //},
        viewTaskstatus: async () => { //user is partner
        var Pid = req.params.id
        var Tid = req.params.id
        var partner = Partner.findById(Pid)
        var tasks = Partner.findById(Tid)
        router.get('/', async (req, res) => {
            const tasks = await Task.find()
            res.json({ data: tasks })
          })
        //const tasks = await axios.get('http://localhost:3000/api/tasks/')
        //return tasks
        },
        getTask: async (id) => {
          const tasks = await axios.get(`http://localhost:3000/api/tasks/${(id) ? id : ''}`);
          return tasks;
      },
      updateTask: async (id) => {
          const tasks = await axios.put(`http://localhost:3000/api/tasks/${id}`, {
              event: 'success'
          });
          return feedback;
      },
      deleteTask: async (id) => {
          const res = await axios.delete(`http://localhost:3000/api/tasks/${id}`);
          return res.message;
      },
      createTask: async () => {
        const tasks = await axios.post('http://localhost:3000/api/tasks', {
              Description:'dummydata1' ,
              eta: 'dummydata2',
              levelofcommitment: 'dummydata3',
              partner: 'dummydata4',
              monetarycompensation: 'dummydata5',
              skills: 'dummydata6',
              lifecyclestatus: 'dummydata7',
              experienceneeded: 'dummydata8',
              consultancy: 'dummydata9'
            
          });
          return tasks;
      }    
};
router.post('/partners/:Pid/tasks/:Tid',functions.viewTaskstatus)
module.exports = functions;