var User = require('../datasets/users');
var fs = require('fs-extra');
var path = require('path');

module.exports.updatePhoto = function(req,resp){
    var file = req.files.file;
    var userId = req.body.userId;
    console.log("User " + userId + " is submitting " + file.name);
    
    var uploadDate = new Date().toISOString;

    
    
    var tempPath = file.path;
    var targetPath =  path.join("../backend/uploads/" + userId + uploadDate + file.name);
    
    var savePath = "/uploads/" + userId + uploadDate + file.name;
    
    fs.rename(tempPath,targetPath,function(err){
        if(err) {
            console.log(err);
        } else {
            User.findById(userId, function(err, results){
                var user = results;
                user.image = savePath;
                user.save(function(err){
                    if(err){
                        console.log("failed save");
                        resp.json({status:500});
                    }
                    else{
                        console.log("save successful");
                        resp.json({status:200});
                    }
                })
                
            })
        }
    });
}




module.exports.updateUserName = function(req,resp){
    var username = req.body.username;
    var userId = req.body.userId;
    
    User.findById(userId, function(err, results){
        var user = results;
        user.username = username;
        
        user.save(function(err){
            if(err){
                console.log("fail");
                resp.json({status:500});
            }
            else{
                console.log("success");
                resp.json({status:200});
            }
        });
    });
}

module.exports.updateBio = function(req,resp){
    var userId  = req.body.userId;
    var userBio = req.body.userbio;
    
    User.findById(userId, function(err,results){
        var user = results;
        user.userbio = userBio;
        
        user.save(function(err){
             if(err){
                console.log("fail");
                resp.json({status:500});
            }
            else{
                console.log("success");
                resp.json({status:200});
            }
        });
    });
}