const uuid = require("uuid/v4")

class Feedback{
    constructor(event,response,name){
        this.event=event;
        this.response=response;
        this.name=name;
        this.id=uuid();
    }
}
module.exports= Feedback;

