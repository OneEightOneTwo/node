const http = require('http');
const fs = require('fs'); // 
// const $ = require('jquery'); //npm install jquery
const cheerio = require('cheerio');
const request = require('request');
// 创建客户端 == ajax
http.get({
    hostname: 'www.umei.cc',
    port: 80,
    path: '/',
    agent: false // 仅为此一个请求创建一个新代理。
}, (res) => {
    // 用响应做些事情
    // 流 buffer
    // 一开始空的容器
    let body = '';
    // console.log(res);
    // 不断监听流的来源，并放入body容器
    res.on('data', (chunk) => {
        body += chunk;
    });

    // 'end' 事件表明整个请求体已被接收。 
    //  源头数据终止那就执行这个回调 
    res.on('end', () => {
        fs.writeFile('./umei.html',body,(err)=>{})
        // 把客户端请求回来的html结构交给cheerio处理
        // $兼容jquery的大部分
        const $ = cheerio.load(body);
        $('img').each((index,item)=>{
            let src = $(item).attr('src');
            console.log(`第${index+1}张图片为:${src}`);
            // 利用request模块配合内置fs模块去批量下载图片
            request(src).pipe(fs.createWriteStream(`./imgs/${index+1}.png`))
        })
        // console.log($('img'));
        // console.log(body);
    })
});