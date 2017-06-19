var express = require('express');
var fs = require('fs');
var app = express();

//跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
next();
});


app.get('/getdata',function(req,res){
    
    
    console.log('get data');
    
    fs.readFile('../data/data.json',function(err,data){
        if(err){
          return
        }else {
          var data = data.toString();
          var json = JSON.parse(data);
          res.json(json);
        }
    })
})

//$.get("./name",function(req,res){
//res.send("dcndxd")
//})

app.listen(3012,function(){
    console.log('服务器启动.....')
})
