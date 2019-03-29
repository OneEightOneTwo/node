// http1超文本传输协议
// https
// file
// http2
// tcp/ip

// node的内置模块
const http = require('http');
// console.log(http);
// request请求头+请求体
// response响应头+响应体

// 创建了一个服务器一直在监听
let server = http.createServer((request,response)=>{
    // 处理请求
    // $_GET 
    console.log(request.headers);
    console.log(request.url);
    console.log(request.method);

    // $_POST
    request.on('data',(chunk)=>{
        console.log(chunk.toString());
    })

    // 处理结果
    // echo 
    response.write('收到');
    response.end();
})
server.listen(12345)
console.log('server started')