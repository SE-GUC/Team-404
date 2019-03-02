const Partner = require('partners')
const uuid = require("uuid/v4")

class partner{
    constructor(organisationname,basicinformation,partners,boardmembers, eventsorganized,fieldofwork,projecthistory,feedbackform){
        this.organisationname=organisationname;
        this.basicinformation=basicinformation;
        this.partners=partners;
        this.boardmembers=boardmembers;
        this.eventsorganized=eventsorganized;
        this.fieldofwork=fieldofwork;
        this.projecthistory=projecthistory;
        this.feedbackform=feedbackform;
    }
}
module.exports = Partner;
