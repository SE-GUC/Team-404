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
        
};
router.post('/partners/:Pid/tasks/:Tid',functions.viewTaskstatus)
module.exports = functions;