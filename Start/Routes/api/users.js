const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const app = express();
app.use(express.json());
const Joi = require('joi');

// Models
const User = require('../../Models/User');

// temporary data created as if it was pulled out of the database ...
const users = [
    new User('Islam Sanad','isanad','whatsup123','islam.sanad@student.guc.edu.eg','','1234','Partner','Shrouk , Cairo'),
    new User('Ismail Aboulela','ismailaboulela','sup123','ismail.aboulela@student.guc.edu.eg','','5678','Partner','GUC , Cairo'),
	new User('Gomana El-Shimy', 'gomanaelshimy','gello2222','gomanaelshimy@student.guc.edu.eg','','33312','Partner','Maadi , Cairo'),
	new User('Omar Yasser','omaryasser','hiyo123123','omaryasser@student.guc.edu.eg','','1342','Admin','Madinet Nasr , Cairo'),
    new User('Clara Kamel','clarakamel','heeey33312','clarakamel@student.guc.edu.eg','','8979','Admin','Helwan , Helwan'),
    new User('Hania Ghannam','haniaghannam','hii123123','haniaghannam@student.guc.edu.eg','','432312')
];

router.get('/', (req, res) => res.json({ data: users }));

router.get('/:id', (req, res) => {
    const usersId = req.params.id
    const uses = users.find(User => User.id === usersId)
    res.send(uses)
});

// Create a new user
router.post('/', (req, res) => {
	const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const dateofregistration = req.body.dateofregistration;
    const phonenumber = req.body.phonenumber;
    const usertype = req.body.usertype;
    const location = req.body.location;
    const id =uuid.v4();

    if (!name) return res.status(400).send({ err: 'Name field is required' });
	if (typeof name !== 'string') return res.status(400).send({ err: 'Invalid value for name' });
	if (!username) return res.status(400).send({ err: 'Username field is required' });
    if (typeof username !== 'string') return res.status(400).send({ err: 'Invalid Username type' });
    if(username == users.username) return res.status(400).send({ err: 'Username already in use' });
    if (!password) return res.status(400).send({ err: 'password field is required' });
    //if (typeof Password !== 'string') return res.status(400).send({ err: 'Invalid Password type' });
    if (!email) return res.status(400).send({ err: 'email field is required' });
    if (typeof email !== 'string') return res.status(400).send({ err: 'Invalid email type' });
    if (!phonenumber) return res.status(400).send({ err: 'phonenumber field is required' });
    if (typeof phonenumber !== 'string') return res.status(400).send({ err: 'Invalid phonenumber type' });
    // if (!usertype) return res.status(400).send({ err: 'usertype field is required' });
    // if(!location) return res.status(400).send({err : 'location unvalid'});no
    const newUser = {
		name,
        username,
        password,
        email,
        dateofregistration,
        phonenumber,
        usertype,
        location,
	    id
    };
    users.push(newUser)
    return res.json({data: newUser});
});
    router.put('/:id', (req, res) => {
        const id = req.params.id
        const User=users.find(curr => curr.id == id)
        const name = req.body.name;
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;
        const phonenumber = req.body.phonenumber;
        const usertype = req.body.usertype;
        const location = req.body.location;
        const dateofregistration = req.body.dateofregistration;
    const schema ={
       name: Joi.string(),
       username: Joi.string(),
       password: Joi.string(),
       email: Joi.string(),
       phonenumber: Joi.string(),
       usertype: Joi.string(),
       location: Joi.string(),
       dateofregistration: Joi.string()
    }    
    const result = Joi.validate(req.body, schema);
    if(result.error){
        return res.status(400).send({ err : 'Why you enter wrong stuff ma dude?'})
    }
    if(name){
        User.name=name
    }
    if(username){
    User.username=username
    }
    if(password){
        User.password=password
    }
    if(email){
        User.email=email
    }
    if(dateofregistration){
        return res.status(400).send({ err : 'Cant update this field'})
    }
    if(phonenumber){
        User.phonenumber=phonenumber
    }
    if(usertype){
        User.usertype=usertype
    }
    if(location){
        User.location=location
    }
    res.send(users)
    });


   
  


router.delete('/:id', (req, res) => {
    const id = req.params.id
    const User = users.find(User => User.id == id)
    const index = users.indexOf(User)
    users.splice(index,1)
    res.send(users)
})




    




module.exports = router;


//const port = process.env.PORT | 3000;
//app.listen(port, () => console.log(`Server up and running on port ${port}`));
