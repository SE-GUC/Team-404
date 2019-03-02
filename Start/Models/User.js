const uuid = require('uuid')

// The User Model
class User {
    constructor(name,username,password,email,dateofregistration,phonenumber,usertype,location) {
        this.name = name;
        this.password= password;
        this.username=username;
        this.email= email;
        this.dateofregistration=dateofregistration;
        this.phonenumber=phonenumber;
        this.usertype=usertype;
        this.id = uuid.v4();
        //this.notifications=notifications;
        this.location=location;
    };
};

module.exports = User