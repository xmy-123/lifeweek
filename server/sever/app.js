// 引入express模块
const express = require('express');
// 创建服务器
const app = express();
// 设置端口号9090
app.listen(9090);
// 引入cors模块
const cors = require('cors');

const userRouter = require('./ajax/users.js');

const proRouter = require('./ajax/pro.js');

const indexRouter = require('./ajax/index.js');

const bodyparser= require('body-parser');

app.use(bodyparser.urlencoded({
extended:false
}));
app.use(cors({
	origin:['http://127.0.0.1:8080','http://localhost:8080']
}))

// 设置静态资源
app.use(express.static('public'));

app.use('/users',userRouter);

app.use('/pro',proRouter);

app.use('/index',indexRouter);