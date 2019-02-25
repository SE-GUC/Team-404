class Task {
    constructor(ID, Description, eta, levelofcommitment, partner, monetarycompensation, skills, lifecyclestatus, experienceneeded ) {
        this.ID = ID;
        this.Description = Description;
        this.eta = eta;
        this.levelofcommitment = levelofcommitment;
        this.partner= partner;
        this.monetarycompensation = monetarycompensation;
        this.skills = skills;
        this.lifecyclestatus = lifecyclestatus;
        this.experienceneeded = lifecyclestatus;
        
    };
}

module.exports = Task