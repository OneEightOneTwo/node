# node

- 安装[node](https://nodejs.org/zh-cn/)环境
- `npm install gulp`
- 写一份**gulpfile.js**配置gulp的参数
- gulp命令执行js来完成代码处理（压缩，重命名）


# install

如果没有安装的node环境去[node官网](https://nodejs.org/zh-cn/)安装维护版本

查看版本号，在cmd中执行，

```bash
node -v # 10,14.2
```

# introduce

Node.js®是一个基于`Chrome V8`引擎的JavaScript运行时

### 前端（浏览器端）

> 要运行JS，必须借助于HTML文件，没有HTML文件和浏览器环境，那JS是无法运行（要有HTML文件，也要有浏览器环境）
> 浏览器=界面(html+css)+控制台(js)
> JS是必须运行在浏览器上，所以只能控制浏览器


### 后端（服务器端）

> 要运行JS，（既不需要HTML文件，也不需要浏览器环境，只需要Node环境），node替代了HTML文件，也替代了浏览器
> 服务器(node)=控制台
> JS有了node环境，可以运行在非浏览器环境下，因为node是装在系统上，所以JS可以操作系统
node(浏览器的控制台===chrome的V8引擎)<浏览器

Chrome浏览器 = NodeJS(控制台,JS) + 界面(HTML,CSS)

Nodejs就是想做一件事情，把浏览器的JS引擎拿出来，放到世界上任何设备上来跑JS

# 运行

如何使用node,以前我们是打好一份JS，需要配合HTML文件执行，现在只需要在电脑安装好node环境，用以下方式启动

- 写一份JS代码
- 在命令行定位到此代码的位置，运行命令`node JS文件的名字.js`或者`node xxx(省略后缀)`

一般来说，运行nodejs`node JS文件的名字.js`，但是有些情况`gulp xxx`
```js
npm install gulp -g //全局安装，会在全局环境下增加了一个gulp命令
gulp
```


# 模块化

一个前端项目 = 自定义模块+原生内置模块(window,document)+第三方模块(jquery)

一个后端项目 = 自定义模块+原生内置模块(fs,http,os,url)+第三方模块(jquery)

node的内置模块和浏览器的内置模块是不一样

`require.js`二阶段

- 自定义模块  (自己写的JS)
- 内置模块  (location,document.cookie)DOM和BOM  (操作系统)
- 第三方模块 (jquery)

> 前端用得比较多的是1，2方案，后端用得比较多3，4

1. 顺序问题，分开每一个JS去使用
```html
<script src="./lib/jquery.js"></script>
<script src="./lib/common.js"></script>
<script src="./lib/core.js"></script>
```
它会全局污染，就比如jquery如果引入两次，那最后一次会覆盖前面的那一份，原因是因为jquery是把$挂载到全局的window上面

`require`和`module.exports`代替了前端的`<script>`引入方式

2. requirejs

3. ES5
- 导出 module.exports(define)
- 导入 require

4. ES6
- 导出 export
- 导入 import

# 自定义模块化

### 前端

自己写的JS叫自定义模块

- 写多条`<script>引入JS`在html分开引入
- 利用`require.js`
```html
<script src="jquery.js"></script>
<script src="cookie.js"></script>
<script src="module.js"></script>
```

### node（后端）

它没有html，所以需要借助于两个JS方法

导出，借助于`module.exports`
```js
function plus(a, b) {
	return a + b
}

function sub(a,b){
	return a-b
}

module.exports = {
	plus,
	sub
}
```

导入,借助于`require`,建议用相对路径
```js
var tool = require("./plus.js");
```


# 内置模块

[官网内置模块API](https://nodejs.org/dist/latest-v10.x/docs/api/)

不需要自己写，就是node环境自带，它自己写好给你的，就可以引入

Node拿来作为PHP的一种替代（多一种可选的方案）

PHP能做的，Node也能做

node引擎如果放在浏览器里面启动(DOM和BOM)

node引擎如果放在系统上的(跟系统相关的模块，文件操作，网络操作，服务器的模块)

sync  同步
async 异步

nodejs默认是异步(async)

|模块|名字|
|-|-|
|读写文件|fs|
|创建服务器|http|
|查看系统|os|
|压缩文件|zip|
|...|...|

其他模块参考 [node官网内置模块API文档](https://nodejs.org/dist/latest-v8.x/docs/api/)

```js
assert - 断言
async_hooks - 异步钩子
Buffer - 缓冲器
child_process - 子进程
cluster - 集群
console - 控制台
crypto - 加密
dgram - 数据报
dns - 域名服务器
domain - 域
Error - 异常
events - 事件触发器
fs - 文件系统
global - 全局变量
http - HTTP
http2 - HTTP/2
https - HTTPS
inspector - 调试器
module - 模块
net - 网络
os - 操作系统
path - 路径
perf_hooks - 性能钩子
process - 进程
punycode - 域名代码
querystring - 查询字符串
readline - 逐行读取
repl - 交互式解释器
stream - 流
string_decoder - 字符串解码器
timer - 定时器
tls - 安全传输层
trace_events - 跟踪事件
tty - 终端
url - URL
util - 实用工具
v8 - V8引擎
vm - 虚拟机
worker_threads - 工作线程
zlib - 压缩
```

### HTTP

http超文本传输协议
前端最多就是ajax(http协议的一种前端实现方案)  GET/POST


|GET|POST|
|-|-|
|参数在url上|参数在请求体|
|有可能有长度|没长度限制|
|不安全|安全|


|状态码||
|-|-|
|1xx|开始执行|
|2xx|成功|
|3xx|重定向|
|4xx|客户端错误,浏览器端|
|5xx|服务端|

apache(wamp集成环境)+php

```
window
apache
mysql
php
```

### 创建服务器

```js
var http = require('http');
console.log(http);
var server = http.createServer(Function(request,response){
	response.end("hello world");
})
server.listen(12345);//(0,65535)
console.log("启动服务器");
```
出现跨域，加一个头部来解决
```php
header("Access-Control-Allow-Origin:*")
```

# 第三方模块

我们可以从[npm](https://www.npmjs.com/)包管理中心去下载一些第三方包（别人写好传上去的），去在本地node平台实现自己的一些功能

安装第三方包模块

gulp就是一个常用的第三方模块

npm就类似于一个模块应用商店，里面有大量的第三方模块

### 安装

```bash
npm install xxx(gulp) -g
npm i
```

建议安装`cnpm`替代`npm`,或者`yarn`,在命令行上输入以下代码安装
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

除了全局安装之外，安装任何包都会在该目录下`node_modules`，你的包就会被安装在该文件夹下
这个文件夹不要传到svn和git服务器上，以后你移植这个项目的时候不要把`node_modules`，只要
用`package.json`描述文件去代替它，这份文件记录着你开发node的一些关键信息，比如你安装过什么模块作为依赖


### 卸载

```bash
npm uninstall xxx  //卸载某个模块
npm uninstall //全部卸载
```

### 初始化

生成一份`package.json`描述文件
```bash
npm init
```

## 使用第三方模块

```js
var request = require('request');
var gulp = require('gulp');
```

# 状态码

- 1xx 准备，发送
- 2xx 成功
- 3xx 重定向(读缓存)
- 4xx 客户端(浏览器这边)错误
- 5xx 服务端(服务器那边)错误