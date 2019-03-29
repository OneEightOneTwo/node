# express

- [npm的express文档](https://www.npmjs.com/package/express)

把它用做为JS服务器wamp(A apache),apache运行PHP语言的服务器（系统环境）

nodejs它也可以构造服务器，跑JS


express其实就是先想用JS语言配合nodejs环境搭建服务器
服务器作用就是处理请求，响应结果


|前端|后端|
|-|-|
|客户端|服务端|
|浏览器|服务器|
|JS,HTML,CSS|PHP(APACHE),JS(NODEJS),JAVA(JDK)|

> http://localhost:3000/index.html?id=1#hash

|http|localhost|3000|/index.html|?id=1|#hash|
|-|-|-|-|-|-|
|协议|域名|端口|路由|参数|哈希值|

切换不同的路由，就进入不同的逻辑，
也就是浏览器输入不同路径，页面就有不同的返回结果
```js
var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/home', function (req, res) {
  res.send('home页面')
})
 
app.listen(3000)
```


熟悉restfull，也就是灵活运用get，post，put,delete,copy


# express的脚手架

全局安装
```bash
npm install -g express-generator@4
```
在一个文件夹里面用`express`命令创建应用架构
```bash
express test
cd test
```
进入test文件夹安装依赖，推荐cnpm安装所有依赖
```bash
npm install
```
启动应用
```bash
SET DEBUG=test:*
npm start
```
访问在浏览器3000端口号
```bash
http://localhost:3000
```

### 创建路由

进入到test目录的routes文件夹,然后复制`users.js`

你可以改变`/home`这里的路径
```bash
var express = require('express');
var router = express.Router();
router.get('/home', function(req, res, next) {
  res.send('hello world');
});
module.exports = router;
```
在`app.js`添加以下两条，该路由就完成了
```js
var homeRouter = require('./routes/home');
//code
app.use('/test', homeRouter);
```
访问该路径
```js
http://localhost:3000/test/home
```


# mysql

连接数据库

```js
//select * from students where username = 
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'lemon',
	password: '123456',
	database: '1806'
});
connection.query('INSERT INTO students SET ?', [{
	username: req.body.username,
	password: req.body.password
}], function(error, results, fields) {
	if(error) throw error;
	res.send("success");
});
connection.end();
```
