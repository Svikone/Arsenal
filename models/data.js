var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

exports.addPlayers = function(players,cb){
    console.log(players);
    for(var i = 0; i<players.gate.length;i++){
        db.get().collection('gate').insert({
            name:players.gate[i].name,
            number:players.gate[i].number
        });
    }
    for(var i = 0; i<players.defender.length;i++){
        db.get().collection('defender').insert({
            name:players.defender[i].name,
            number:players.defender[i].number
        });
    }
    for(var i = 0; i<players.hdefender.length;i++){
        db.get().collection('hdefender').insert({
            name:players.hdefender[i].name,
            number:players.hdefender[i].number
        });
    }
    for(var i = 0; i<players.attack.length;i++){
        db.get().collection('attack').insert({
            name:players.attack[i].name,
            number:players.attack[i].number
        },function(err,res){
            cb(err,res);
        });
    }
}

exports.getComand = function(cb){
    db.get().collection('gate').find().toArray(function(err,res){
        db.get().collection('hdefender').find().toArray(function(err1,res1){
            db.get().collection('defender').find().toArray(function(err2,res2){
                db.get().collection('attack').find().toArray(function(err3,res3){
                    var result = {
                        gate:res,
                        hdefender:res1,
                        defender:res2,
                        attack:res3
                    }
                    cb(err,result);
                })
            })
        })
    })
}


exports.login = function(user,cb){
    db.get().collection('admin').find({login:user.login,password:user.password}).toArray(function(err,res){
        cb(err,res);
    })
}

exports.addNews = function(news,cb){
    db.get().collection('news').insert({
        title:news.title,
        content:news.content,
        lowContent:news.lowContent,
        img:news.img
    },function(err,res){
        cb(err,res);
    })
}

exports.addTable = function(table,cb){
    db.get().collection('table').insert({
        Tcommand:table.Tcommand,
        Tgames:table.Tgames,
        Twin:table.Twin,
        Tdraw:table.Tdraw,
        Tloss:table.Tloss,
        Tculled:table.Tculled,
        Tomitted:table.Tomitted,
        Tpoint:table.Tpoint
    },function(err,res){
        cb(err,res);
    })
}


exports.addCalendar = function(calendar,cb){
    db.get().collection('calendar').insert({
        Ccommandone:calendar.Ccommandone,
        Cscore:calendar.Cscore,
        Ccomandtwo:calendar.Ccomandtwo,
        Ctourney:calendar.Ctourney,
        Cstage:calendar.Cstage,
        Cdate:calendar.Cdate
    },function(err,res){
        cb(err,res);
    })
}

exports.addSlider = function(img,cb){
    db.get().collection('slider').insert({
        img:img
    },function(err,res){
        cb(err,res);
    })
}

exports.getNews = function(cb){
    db.get().collection('news').find().toArray(function(err,res){
        db.get().collection('slider').find().toArray(function(err1,res2){
            var result = {
                news:res,
                slider:res2
            }
            cb(err1,result);
        })
    });
}

exports.getCalendar = function(cb){
    db.get().collection('calendar').find().toArray(function(err,res){
        cb(err,res);
    });
}

exports.getTable = function(cb){
    db.get().collection('table').find().toArray(function(err,res){
        cb(err,res);
    });
}

exports.getNewsTable = function(cb){
    db.get().collection('news').find().toArray(function(err,news){
        db.get().collection('table').find().toArray(function(err1,table){
            var res = {
                table:table,
                news:news
            }
            cb(err1,res);
        })
    })
}

exports.dellTable = function(id,cb){
    db.get().collection('table').remove({
        _id:ObjectID(id)
    },function(err,res){
        cb(err,res);
    })
}

exports.dellNews = function(id,cb){
    db.get().collection('news').remove({
        _id:ObjectID(id)
    },function(err,res){
        cb(err,res);
    })
}