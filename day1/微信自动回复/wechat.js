const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./github.key'),
  cert: fs.readFileSync('./github.crt')
};

// http的基础上多了证书校验
https.createServer(options, (req, res) => {
// console.log(req.url);
  let message = req.url.split('=')[1];
  console.log(message)
  // 把数据记录下来
  fs.appendFile('./message.html',`${message}</br>`,(err)=>{})
  // cors解决跨域
  res.setHeader('Access-Control-Allow-Origin',"*");
  res.writeHead(200);
  res.end('16238761283618');
}).listen(8000); // 0~65535


// 前端部分
// let sendMessage = (message) => {
//     let xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange=function()
//     {
//         if (xmlhttp.readyState==4 && xmlhttp.status==200)
//         {
//             console.log(xmlhttp.responseText);
//         }
//     }
//     xmlhttp.open("GET",`https://localhost:8000?message=${message}`,true);
//     xmlhttp.send();
// }
// // 消息的长度
// // document.querySelectorAll(".js_message_plain").length
// // 上一个信息长度
// let preMessageLength = 0;
// setInterval(()=>{
//     // 获取所有信息的节点
//     let messageEle = document.querySelectorAll(".js_message_plain");
//     // 最新信息的长度
//     let messageLength = messageEle.length;
//     if(messageLength>preMessageLength){
//         console.log('有信息了');
//         // 获取最新一条发送到后端
//         sendMessage(messageEle[messageLength-1].innerText);
//         // 更新上一个消息的长度
//         preMessageLength = messageLength;
//     }
// },1000)





