const uuidv1 = require('uuid/v1')

class Notification{
    
    constructor(text){
        var today       = new Date();
        var date        = today.getFullYear() + '';
        var time        = today.getHours() + '';    
        var dateTime    = date + time;
        this.id         = uuidv1();
        this.text       = text;
        this.time       = dateTime;
        
    };
};
 module.exports = Notification
//function SendNotif(text, notified, Notification) {
//    Notification(text,time)
//    array.forEach(notified => {
//        notified.notifications.push(Notification)
//    });   
//}
