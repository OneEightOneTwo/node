# websocket

- [socket.io](https://github.com/Wscats/node-tutorial/issues/7)

ajax

1. 前端主动发，后端被动收（req,res）

websocket

1. 前端主动发，后端被动收（req,res）
2. 后端主动发，前端被动收（req,res）

socket.io包含两部分，一部分在node的express下设置，另一部部分浏览器页面下加载`socket.io.client.js`

### 前端

要下载客户端[socket.io.js](https://github.com/socketio/socket.io-client)文件，在页面中引入
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<script src="javascripts/socket.io.js"></script>
		<script>
			var socket = io('http://localhost:3001');
			socket.on('connect', function() {});
			socket.on('event', function(data) {});
			socket.on('disconnect', function() {});
			//监听
			socket.on('getServerMessage', function(data) {
				console.log(data)
			});
		</script>
	</body>
</html>
```


### 后端

在express中使用，以下代码

```js
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(){ /* … */ });
server.listen(3000);
```

|接口|描述|
|-|-|
|`socket.on()`|发送信息|
|`socket.emit()`|接受信息|

```js
var app = require('express')();
	var server = require('http').createServer(app);
	var io = require('socket.io')(server);
	io.on('connection', function(socket) {
		//发送socket信息的逻辑写在这里
		/* … */
		//监听
		//socket.on();
		//发送
		setInterval(()=>{
			socket.emit('getServerMessage',parseInt(Math.random()*100));
		},1000)
	});
	server.listen(3001);
```