const http = require('http');
const fs = require('fs');
const req = http.get('http://fs.w.kugou.com/201903291031/8de6755d3130fef2cdf40a83801bca07/G123/M01/13/1D/uw0DAFqox3OAWe0UAD_HxYp_Ivc469.mp3',(res)=>{
    const writeStream = fs.createWriteStream('演员.mp3');
    res.pipe(writeStream);
})

// $.ajax(
//     // 发请求
//     data:{
//         req
//     },
//     // 接响应
//     success(res){

//     }
// )

// TCP -> 三次握手
// client -> server  服务器你在吗   我知道   他知道
// client <- server  客户端我在的
// client -> server  我们要开始干活了   状态码(404,504) 200
// 最大限度保证连接稳定
// client ---> req请求头请求体   <----res响应头相应体----server   ajax
// TCP -> 四次挥手