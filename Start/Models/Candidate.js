<<<<<<< HEAD

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
=======
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
>>>>>>> bbbaa2298d6f3c289387f707ca0b226abf70abc3
