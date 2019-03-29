const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./github.key'),
  cert: fs.readFileSync('./github.crt')
};

// http的基础上多了证书校验
https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000); // 0~65535


// 浏览器微信网页版

// 微信网页版有个聊天功能

// 用户发送了信息  -》 微信网页版接受用户发送的信息

// 
