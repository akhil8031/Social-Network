var exp = require('express');
var app = exp();
var bodyParser = require('body-parser');
var mong = require('mongoose');
var authcont = require('../backend/controller/authcontroller.js');
var usercont = require('../backend/controller/users-controller.js');
var profileCont = require('../backend/controller/profileCont.js');
var wastecont = require('../backend/controller/waste-controller.js');
var multiPart = require('connect-multiparty');
var multipartMidware = multiPart();


mong.connect("mongodb://localhost:27017/mongoprac",function(err,db){
    if(!err){
        console.log("connected");
    }
});

app.use(multipartMidware);
app.use(exp.static('../front-end'));
app.use(bodyParser.json());
app.use('/node_modules', exp.static(__dirname + '/node_modules'));

app.get('/pockchik',function(req, resp){
    resp.sendFile('login.html',{root:'../front-end'});
});

app.post('/signup',authcont.signup);
app.post('/login',authcont.login);

app.post('/editprof',multipartMidware, profileCont.updatePhoto);

app.post('/updateUsername', profileCont.updateUserName);
app.post('/updateBio', profileCont.updateBio);

app.post('/waste',wastecont.postWaste);
app.get('/waste/get',wastecont.getWastes);
app.get('/users/get',usercont.getUsers);
app.post('/users/follow',usercont.followUser);
app.listen(1337, function(){
    console.log("i am listning");
});