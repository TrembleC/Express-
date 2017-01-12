var express = require("express");
var ejsMate = require("ejs-mate");
var path = require("path");

var app = express();

var router = express.Router();
// 设置视图目录
// app.set('views','./Express-/views');
// 设置默认的模版引擎
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);
//布尔值设置
app.enable('trust proxy');

//默认路径地址
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
  res.render("index");
});

//定义入口路由
// router.get('/', function(req, res) {
//   res.send('index');
// });


app.use('/', router);

//端口监听
app.listen('3002');

console.log("loaded success!");