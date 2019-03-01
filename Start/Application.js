//const Applications=required('Application');
const uuid = require('uuid/v4');

class Application{
    constructor(candidate,partner,datetime,task,status){
        this.candidate=candidate;
        this.partner=partner;
        this.datetime=datetime;
        this.task=task;
        this.status=status;
        this.id=uuid();   
    };
}

module.exports = Application