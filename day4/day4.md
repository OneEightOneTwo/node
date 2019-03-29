# express

参考文档

- [multer模块](https://github.com/Wscats/node-tutorial/tree/master/uploadFiles)

- [multer npm官方文档](https://www.npmjs.com/package/multer)

### 上传单文件项目

安装`multer`模块
```js
// 上传配置的必须的参数
var multer = require('multer');
var storage = multer.diskStorage({
	//设置上传后文件路径，uploads文件夹会自动创建。
	destination: function(req, file, cb) {
		cb(null, './uploads')
	},
	//给上传文件重命名，获取添加后缀名
	filename: function(req, file, cb) {
		var fileFormat = (file.originalname).split(".");
		//给图片加上时间戳格式防止重名名
		//比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名
		cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
	}
});
var upload = multer({
	storage: storage
});
```

# mongodb

nosql数据库，不需要sql语句的数据库，里面一切都是类似于JSON文件

- [mongodb教程](https://github.com/Wscats/node-tutorial/issues/20)

# 安装

- 双击安装`mongodb.msi`文件
- 找回安装完`mongodb`文件夹`bin`的路径
```
C:\Program Files\MongoDB\Server\3.2\bin
```
里面有多个exe文件
- 在`bin`该目录下，打开`cmd`命令行，执行以下命令，该目录有数据连接此数据库，该目录没库就是创建数据库成功，
```bash
mongod --dbpath [文件夹的路径]
```
- 安装`robo3t`的可视化软件来管理`mongodb`数据库，没有表的概念，只有集合(类似于mysql的表))
- 配合node来使用`mongodb`数据库,在项目目录下用cmd安装
```bash
npm install mongodb
```
- 新建`server.js`,执行以下代码
```js
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = '1806';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  client.close();
});
```
- 查看数据
```js
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = '1806';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  //选择库
  const db = client.db(dbName);
  //选择表 集合
  db.collection('students').find({
    age: 18
  }).toArray(function (err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
  });
  client.close();
});
```
