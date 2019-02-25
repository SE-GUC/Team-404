const fid=required('fid');

class Feedback{
    constructor(event,response,name){
        this.event=event;
        this.response=response;
        this.name=name;
        this.id=fid.v4();
    }
}