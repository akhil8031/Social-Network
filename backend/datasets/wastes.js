var mongoose = require('mongoose');

module.exports = mongoose.model('waste',{
    user:String,
    userId:String,
    userImage:String,
    content:String,
    date:{type:Date,default:Date.now}
})