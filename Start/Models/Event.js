
const uuidv1 = require('uuid/v1');


class Event{
    constructor(name,organizer,location,description,remainingplaces,speakers,maximumplaces,topicscovered,feedbackid,field,approvalstatus){
        this.name=name;
        this.organizer=organizer;
        this.location=location;
        this.description=description;
        this.remainingplaces=remainingplaces;
        this.speakers=speakers;
        this.maximumplaces=maximumplaces;
        this.topicscovered=topicscovered;
        this.feedbackid=feedbackid;
        this.field=field;
        this.approvalstatus=approvalstatus;
        this.id=uuidv1();

    }
}
module.exports = Event;