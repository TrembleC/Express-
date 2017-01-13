var express = require("express");
var ejsMate = require("ejs-mate");
var path = require("path");

var app = express();

// //布尔值设置
// app.enable('trust proxy');

// 默认路径地址
app.use(express.static(path.join(__dirname, 'public')));	//使用静态资源的默认路径，路径可以省略默认是'/'

app.engine('ejs', ejsMate);

//设置模版文件夹
app.set('views',__dirname + '/views');	//__dirname当前执行js文件路径，设置视图目录
app.set('view engine', 'ejs'); 			

//测试例子
app.get("/", function(req, res){
	res.render("index", {
		title: 'test',
		fun: 'testRoute'
	});
});

//定义入口路由
// router.get('/', function(req, res) {
//   res.send('index');
// });


// app.use('/', router);

//端口监听
app.listen('3002');

console.log("loaded success!");