var mongoose = require('mongoose');
var User = require('../datasets/users');

module.exports.signup = function(req,resp){
    console.log(req.body);
    var user = new User(req.body);
    user.save();
    resp.json(req.body);
}


module.exports.login = function(req,resp){
    console.log(req.body);
    User.find({email:req.body.email},function(err,results){
        if(err){
            console.log("error");
        }
        if(results && results.length === 1){
            var userData = results[0];
            resp.json({email:req.body.email,
                     _id:userData._id,
                      username:userData.username,
                       image:userData.image,
                      following:userData.following,
                      followers:userData.followers
                      });
        }
    });
}
