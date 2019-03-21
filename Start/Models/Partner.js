// const Partner = required('partners')
const uuid = require('uuid/v4')
class Partner {
  constructor (organisationname, basicinformation, partnerss, boardmembers, eventsorganized, fieldofwork, projecthistory, feedbackform) {
    this.organisationname = organisationname
    this.basicinformation = basicinformation
    this.partnerss = partnerss
    this.boardmembers = boardmembers
    this.eventsorganized = eventsorganized
    this.fieldofwork = fieldofwork
    this.projecthistory = projecthistory
    this.feedbackform = feedbackform
    this.id = uuid()
  }
}
module.exports = Partner
