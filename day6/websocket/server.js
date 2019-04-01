// websocket
// net socket

// http ajax
const {
    Server
} = require('ws');
// 创建websocket的服务器
var wss = new Server({
    port: 8080
});
// 创建连接
wss.on('connection', function (client) {
    // 打印所有客户端
    // console.log(wss.clients);
    // 连接如果成功就会返回client的客户端信息
    // 占用服务器的资源
    // setInterval(() => {
    //     client.send('hello world');
    // }, 1000)
    // 单体发送
    // client.onmessage = (msg) => {
    //     console.log(msg.data);
    //     client.send(msg.data);
    // }
    // 群体发送
    client.onmessage = (msg) => {
        wss.clients.forEach(function (client) {
            client.send(msg.data)
        });
    }
})
