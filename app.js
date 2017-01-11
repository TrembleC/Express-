/*入口文件*/
var express = require("express");
var app = express();

app.get('/', function(req, res){
  res.send("nnnnnnnnn");
});

app.listen(7777);