const http = require('http');
const fs = require('fs');
// http req请求 它是一个流
http.createServer((req, res) => {
     // 跨域
     res.setHeader('Access-Control-Allow-Origin', '*');
     // 必须要设置
     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    const writeStream = fs.createWriteStream(`${req.url.split('=')[1]}`);
    // res.end('hello world');
    // // 空容器装载接受这些流
    // let body = '';
    // // 监听req的流入
    // req.on('data', (chunk) => {
    //     body = body + chunk;
    // })
    // // 监听流结束
    // req.on('end', () => {
    //     console.log('stream', body);
    // })
    // 把流引入到本地的abc.png文件里面
    req.pipe(writeStream);
    res.end('上传成功');
}).listen(8888);