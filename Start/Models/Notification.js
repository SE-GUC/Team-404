//const uuid = require('uuid')

class Notification{
    constructor(text){
        var today       = new Date();
        var date        = today.getFullYear() + '';
        var time        = today.getHours() + '';
        var dateTime    = date + time;
        
        this.text       = text;
        this.time       = dateTime;
        
    };
}
 module.exports = Notification;
//function SendNotif(text, notified, Notification) {
//    Notification(text,time)
//    array.forEach(notified => {
//        notified.notifications.push(Notification)
//    });   
//}
