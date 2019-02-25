const Application=required('Application');
const Aid =required('Aid');

class Application{
    constructor(candidate,partner,datetime,task,status){
        this.candidate=candidate;
        this.partner=partner;
        this.datetime=datetime;
        this.task=task;
        this.status=status;
        this.id=Aid.v4();
    
    }
}