const uuid = require('uuid') 
class Task {
    constructor(Description, eta, levelofcommitment, partner, monetarycompensation, skills, lifecyclestatus, experienceneeded,consultancy ) {
        this.id                    = uuid.v4();
        this.Description            = Description;
        this.eta                    = eta;
        this.levelofcommitment      = levelofcommitment;
        this.partner                = partner;
        this.monetarycompensation   =  monetarycompensation;
        this.skills                 = skills;
        this.lifecyclestatus        = lifecyclestatus;
        this.experienceneeded       = experienceneeded;
        this.consultancy            = consultancy;
        
    };
}

module.exports = Task