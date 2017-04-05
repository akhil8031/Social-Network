var users = require('../datasets/users');

module.exports.getUsers = function(req,resp){
    users.find({}, function(err, userData){
        if(err){
            resp.error(err);
        } else {
            resp.json(userData);
        }
    })
};


module.exports.followUser = function(req,resp){
    var userId = req.body.userId,
        wasterId = req.body.xId;
    
    users.findById(wasterId,function(req,waster){
        waster.followers.push({userId: userId});
        waster.save();
    })
    users.findById(userId,function(err,follower){
       follower.following.push({userId:wasterId}) ;
        follower.save();
    });
};