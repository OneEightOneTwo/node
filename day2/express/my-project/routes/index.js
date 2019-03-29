var express = require('express');
var fs = require('fs');
// 调用express模块，并且使用里面的router功能
var router = express.Router();

/* GET home page. */
// ajax 满足get请求  并且 /就进入该回调函数
router.get('/', function (req, res, next) {
  // req客户端接受信息
  // res服务端的返回信息
  // 读取views文件夹里面index.jade
  // res.render('index', {
  //   title: 'Express'
  // });
  // header()
  // cors跨域方法
  res.append('Access-Control-Allow-Origin','*');
  let data = {
    title: 'Express'
  }
  res.send(`
    <div>hello world ${data.title}</div>
  `)
  // 如果有next的话，就继续执行下一个回调
  next();
}, function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

module.exports = router;