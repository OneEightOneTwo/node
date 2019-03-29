# 参考教程

[runoob菜鸟教程](https://www.runoob.com/nodejs/nodejs-tutorial.html)

# 异步

### 前端（浏览器端）

前端异步只有一下几种情况是异步
```
ajax xmlhttprequest
setInterval/setTimeout
jsonp
```

### 后端（服务器端node）

比前端多很多，很多方法都是异步的

```js
fs.readFile //异步
fs.readFileSync //同步
```

异步一般配合回调函数,回调函数能让异步变得有意义

同步比异步少了回调函数

同步阻塞，相对稳定，不需要回调

异步非阻塞，相对不稳定，配合回调才有意义

```js
//同步
var data = fs.readFileSync('./test.txt');
console.log(data.toString());

//异步
fs.readFile('./test.txt',function(err,data2){
	console.log(data2.toString());
});
```


# 回调嵌套

如果出现多个回调嵌套的时候，建议是用`promise`来去解决这个回调地狱
```js
function buyPizza() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("买披萨");
			resolve()
		}, 1000);
	})
}
function buyDrink() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("买饮料");
			resolve()
		}, 1000);
	})
}
function eatMeal() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("吃东西");
			//resolve()
		}, 1000);
	})
}
buyPizza().then(buyDrink).then(eatMeal);
```
# await和async

await和async也是解决异步嵌套的一个方法，它建立在promise的基础上
[promise&&await&&deferred和event loop](https://github.com/Wscats/node-tutorial/issues/12)

# event和观察者模式

```js
myEmitter.on('buypiza', () => {
    setTimeout(() => {
        console.log('买披萨');
        myEmitter.emit('eatpiza');
    }, 1000)
});

myEmitter.on('eatpiza', () => {
    setTimeout(() => {
        console.log('吃披萨');
        myEmitter.emit('meeting');
    }, 2000)
});

myEmitter.on('meeting', () => {
    console.log('约会');
});
myEmitter.emit('buypiza');
```

# node-wifi

```js
var wifi = require('node-wifi');
```

# request

以前我们是自己写前端页面触发ajax请求来获取后端信息，但是有了request模块，我们可以伪造这个ajax请求

任何前端请求都有

请求头（浏览器信息），请求体（POST请求，请求参数会放在这个地方）   用户不可见的

响应头（服务器信息），响应体（页面的内容，用户可见）

- [request模块文档](https://www.npmjs.com/package/request)

### 爬虫

爬取网站的内容，然后可以保存到本地，或者分析页面获取有价值的信息
```js
var request = require('request');
var fs = require('fs');
request('http://www.umei.cc/', function(error, response, body) {
	//console.log('error:', error); // Print the error if one occurred
	//console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	console.log('body:', body); // Print the HTML for the Google homepage.
//	fs.writeFile('test.html', body, function(err) {
//		console.log("成功保存")
//	})
});
console.log("开始请求");
```


# cheerio

- [cheerio使用文档](https://www.npmjs.com/package/cheerio)

实现网页内容分析，用法类似于jQuery，node版本jQuery,可以用它爬取文字，图片，音频

```js
var request = require('request');
var cheerio = require('cheerio');
request('http://www.umei.cc/', function(error, response, body) {
	//console.log('body:', body); // Print the HTML for the Google homepage.
	const $ = cheerio.load(body);
	$("img").each((i,e)=>{
		console.log($(e).attr("src"))
	})
});

console.log("开始请求");
```

并非所有网站都是能爬，有些网站是防爬虫，还有一些网页是前端JS动态生成

