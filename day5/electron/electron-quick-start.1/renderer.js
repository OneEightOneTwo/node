// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
let fs = require('fs');
let $ = require('jquery');
let http = require('http');
let request = require('request');
// 用fs模块打开index.css文件
// $('#openFile').click(() => {
//     fs.readFile('./index.css', (err, data) => {
//         console.log(data.toString());
//         // 把index.css的内容读取出来
//         $("#message").val(data.toString());
//     });
// })

// $('#saveFile').click(() => {
//     let message = $("#message").val();
//     // 保存内容
//     fs.writeFile('./index.css', message, (err, data) => {
//     });
// })

$('#sendMessage').click(() => {
    
    // 需要发送的内容
    let message = $("#message").val();
    console.log(message);
    // 发送请求 客户端
    request.get(`http://localhost:3000?message=${message}`,(err,request,body)=>{

    });
})

// 记录客户端收到的信息
let messages = [];
// 创建服务器
http.createServer((req,res)=>{
    let message = req.url.split('=')[1];
    messages.push(message);
    let html = messages.map((item,index)=>{
        return `
            <li>${item}</li>
        `
    }).join('');
    $('#messageList').html(html);
    console.log(req.url);
    res.end('hello world');
}).listen(3001);