const mongoose = require('mongoose');

 if(process.env.NODE_ENV === 'production') {

    module.exports ={ mongoURI : process.env.MONGO_URI,}
}
else{

 module.exports = { mongoURI : 'mongodb+srv://user:gumangi18(A)@gomana-xwwl1.mongodb.net/test?retryWrites=true',}
}
