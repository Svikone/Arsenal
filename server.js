var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var cookieParser = require('cookie-parser');
var fs = require('fs');
var path = require('path');
var db = require('./db');
var bodyParser = require('body-parser');
var ObjectID = require('mongodb').ObjectID;
var session = require('express-session');
var multiparty = require('multiparty');

var data = require('./controllers/data');

app.use(express.static(__dirname));

app.use (bodyParser.urlencoded ({
    extended: true,
    limit: '50mb'
}));

app.use (bodyParser.json ({
    extended: true,
 limit: '50mb'
}));

app.use(cookieParser());

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/',data.getNews);

app.get('/comond',data.getComand);

app.get('/calendar',data.getCalendar);


app.get('/news',function(req,res){
    res.render('news.ejs',{});
})

app.get('/table',data.getTable);

app.get('/history',function(req,res){
    res.render('history.ejs',{});
})
app.get('/login',function(req,res){
    res.render('login.ejs',{});
})
app.get('/admin',checkAdmin,function(req,res){
    res.render('admin.ejs',{});
})

app.post('/addPlayers',checkAdmin,data.addPlayers);

app.post('/login',data.login);

app.post('/addNews',checkAdmin,data.addNews);

app.post('/addTable',checkAdmin,data.addTable);

app.post('/addCalendar',checkAdmin,data.addCalendar);

app.post('/addSlider',checkAdmin,data.addSlider);


function checkAdmin(req,res,next){
    console.log(req.cookies.login);
    db.get().collection('admin').find().toArray(function(err,result){
        console.log(req.cookies);
        if(req.cookies.login == result[0].login  && req.cookies.password == result[0].password){
            next();	
        }
        else{
            res.redirect('/login')
        }
    })
}

db.connect('mongodb://localhost:27017/Arsenal',function(err){
 if(err){
  return console.log(err);
 }
 app.listen(9000,function(){
  console.log("server started");
 })
});