var data = require('../models/data');
var multiparty = require('multiparty');
var fs = require('fs');
//// 201 checkAdmin///
///200 login?////
exports.addPlayers = function(req,res){
    var form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
        // var screen = {
        //     gate:files.gate,
        //     defender:files.defender,
        //     hdefender:files.hdefender,
        //     attack:files.attack
        // }
        console.log(files);
        var players = {
           gate:JSON.parse(fields.gate),
           defender:JSON.parse(fields.defender),
           hdefender:JSON.parse(fields.hdefender),
           attack:JSON.parse(fields.attack)
        }
        // console.log(players.gate[0].img);
        data.addPlayers(players,function(err,result){
            if(!err)
                return res.sendStatus(200);
            res.sendStatus(500);
            
        })
    });
}

exports.getComand = function(req,res){
    data.getComand(function(err,result){
        if(!err){
            res.render('comond.ejs',{result:result}); 
        }
    })
}

exports.login = function(req,res){
    var user = {
        login:req.body.login,
        password:req.body.password
    }
    data.login(user,function(err,result){
        if(result!=""){
            res.cookie("login",result[0].login);
            res.cookie("password",result[0].password);
            res.send({success:true}).end();
        }
        else{
            res.send({success:false}).end();
        }
    })
}

exports.addNews = function(req,res){
    var news = {
        title:req.body.title,
        content:req.body.content,
        lowContent:req.body.lowContent,
        img:req.body.img
    }
    fileSave(req.body.data,news.img);
    data.addNews(news,function(err,result){
        if(result!="")
            res.sendStatus(200);
        else
            res.sendStatus(500);
    })
}

exports.addTable = function(req,res){
    var table = {
        Tcommand:req.body.Tcommand,
        Tgames:req.body.Tgames,
        Twin:req.body.Twin,
        Tdraw:req.body.Tdraw,
        Tloss:req.body.Tloss,
        Tculled:req.body.Tculled,
        Tomitted:req.body.Tomitted,
        Tpoint:req.body.Tpoint
    }
    data.addTable(table,function(err,result){
        if(result!="")
            res.sendStatus(200);
        else
            res.sendStatus(500);
    })
}

exports.addCalendar = function(req,res){
    var calendar = {
        Ccommandone:req.body.Ccommandone,
        Cscore:req.body.Cscore,
        Ccomandtwo:req.body.Ccomandtwo,
        Ctourney:req.body.Ctourney,
        Cstage:req.body.Cstage,
        Cdate:req.body.Cdate
    }
    data.addCalendar(calendar,function(err,result){
        if(result!="")
            res.sendStatus(200);
        else
            res.sendStatus(500);
    })
}


exports.addSlider = function(req,res){
    fileSave(req.body.data,req.body.img);
    data.addSlider(req.body.img,function(err,result){
        if(result!="")
            res.sendStatus(200);
        else
            res.sendStatus(500);
    })
}

exports.getNews = function(req,res){
    data.getNews(function(err,docs){
        if(docs!="")
            res.render('index.ejs',{result:docs});
        else
            res.render('index.ejs',{result:{}});
    })
}

exports.getCalendar = function(req,res){
    data.getCalendar(function(err,docs){
        if(docs!="")
        res.render('calendar.ejs',{result:docs});
    else
        res.render('calendar.ejs',{result:{}});
    })
}

exports.getTable = function(req,res){
    data.getTable(function(err,docs){
        if(docs!="")
        res.render('table.ejs',{result:docs});
    else
        res.render('table.ejs',{result:{}});
    })
}

function fileSave(file,name){
    var b64Data = file.split(',')[1];
	var buffer = new Buffer(b64Data,'base64');
	fs.writeFile('./images/'+name,buffer,function(e){
		if(e) console.log(e);
    });
}
