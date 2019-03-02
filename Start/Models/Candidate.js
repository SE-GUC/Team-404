const uuid = require('uuid/v4');
class Candidate{
    constructor(age,skills,interests,pasteventsandtasks,reviewsrecieved){
        this.age=age;
        this.skills=skills;
        this.interests=interests;
        this.pasteventsandtasks=pasteventsandtasks;
        this.reviewsrecieved=reviewsrecieved;
        this.id=uuid();
    };
};
module.exports = Candidate;
