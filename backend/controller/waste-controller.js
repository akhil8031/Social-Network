var waste = require('../datasets/wastes');

module.exports.postWaste = function(req,resp){
    var wast = new waste(req.body);
    wast.save();
    
    waste.find({}).sort({date: -1}).exec(function(err, allwaste){
        if(err){
            resp.error(error);
        }
        else{
            resp.json(allwaste);
        }
    });
};
3

module.exports.getWastes = function(req,resp){
    waste.find({}).sort({date:-1}).exec(function(err, allwastes){
                                  if(err){
                                      resp.error(err);
                                  }
    
                                  else{
                                      resp.json(allwastes);
                                  }
    });
};