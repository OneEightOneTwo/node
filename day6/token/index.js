let http = require('http');
let querystring = require('querystring');
http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    let body = '';
    req.on('data', (chunk) => {
        body += chunk
    })
    req.on('end', () => {
        // console.log(body);
        let {
            username,
            password
        } = querystring.parse(body);
        // 根据用户名和密码，分发对应令牌
        console.log({
            username,
            password
        });
        let token = (password + 7) * 6;
        res.end(JSON.stringify({
            token,
            status: 'success'
        }));
    })
}).listen(8888);