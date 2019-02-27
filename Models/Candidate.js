const Candidate= required('Candidates');

class Candidate{
    constructor(age,skills,interests,pasteventsandtasks,reviewsrecieved){
        this.age=age;
        this.skills=skills;
        this.interests=interests;
        this.pasteventsandtasks=pasteventsandtasks;
        this.reviewsrecieved=reviewsrecieved;
    }
}
module.exports = Candidate;