const axios = require('axios');
//const tasks = require ('../Routes/api/tasks')
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
const functions = {
        //add: (x,y) => x+y,
       // viewTaskstatus: async () => {
        //const user = await axios.get('http://localhost:3000/api/tasks/')
        //return user
        //},
        //viewTaskstatus: async () => { //user is partner
        //var Pid = req.params.id
        //var Tid = req.params.id
        //var partner = Partner.findById(Pid)
        //var tasks = Partner.findById(Tid)
        //router.get('/', async (req, res) => {
          //  const tasks = await Task.find()
           // res.json({ data: tasks })
         // })
        //const tasks = await axios.get('http://localhost:3000/api/tasks/')
        //return tasks
        //},
        getSpecificTask: async () => {
            const tasks = await axios.get(
                `http://localhost:3001/Routes/api/tasks/5cbdd01fc0ce1c46048a18bf`
            );
            return tasks;
          },

        getTask: async (id) => {
          const tasks = await axios.get(`http://localhost:3001/Routes/api/tasks/`);
          return tasks;
      },
      updateTask: async (id) => {
          const tasks = await axios.put(`http://localhost:3001/Routes/api/tasks/5cbdd0b21340db2718e6bf7a`, {
              description: 'ghg'
          });
          return tasks;
      },
      deleteTask: async (id) => {
          const res = await axios.delete(`http://localhost:3001/Routes/api/tasks/5cb37a5b4e76663c4c10c9e9`);
          return res;
      },
      viewTaskStatus:  async (id) => {
        const res = await axios.get(`http://localhost:3001/Routes/api/tasks/viewTaskStatus/5cbdd0b21340db2718e6bf7a`);
        return res.lifeCycleStatus;
    },

      createTask: async () => {
        const tasks = await axios.post('http://localhost:3001/Routes/api/tasks', {
              title: 'dummydata',
              description:'dummydata1' ,
              eta: 5,
              levelOfCommitment: 'dummydata3',
              partner: 'dummydata4',
              monetaryCompensation: 6,
              skills: 'CS',
              lifeCycleStatus: 'dummydata7',
              experienceNeeded: 'dummydata8',
              consultancyRequested: true,
              consultant: 'dummydata9',
              applications: [""],
              tags: 'dummydata11'
            
          });
          return tasks;
      }    
};
//router.post('/partners/:Pid/tasks/:Tid',functions.viewTaskstatus)
module.exports = functions;