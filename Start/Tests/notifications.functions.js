const axios = require('axios');


const functions = {
//Admin create event 
SendNotification: async (req,res) => {
    try {
      var id = req.body.id
      var type = req.boy.usertype
      if(type == "Partner"){
         var Partner = Partner.findById(id)
         var recipient = Partner
      }else if(type == "Candidate"){
         var Candidate = Candidate.findById(id)
         var recipient = Candidate
      }else if(type == "Consultant" ){
         var Consultant = Consultant.findById(id)
         var recipient = Consultant
      }else if(type == "User"){
         var User = User.findById(id)
         var recipient = User
      }

     
    }
    catch(error) {
    console.log(error)
    }
},


}
router.post('',functions.CreateNotification)

module.exports = functions;

