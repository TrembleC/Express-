/*入口文件*/
var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.render("index");
});

app.listen('777');

console.log("loaded success!");