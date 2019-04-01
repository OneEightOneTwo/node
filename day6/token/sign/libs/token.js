// 加密
let createToken = (obj) => {
    const buf = Buffer.from(JSON.stringify({
        ...obj
    }), 'utf8');
    // console.log(buf.toString('base64'));
    return buf.toString('base64');
}



// 解密
// https

let decodeToken = (token) => {
    const buf = Buffer.from(token, 'base64');
    console.log(buf.toString('utf8'));
    return JSON.parse(buf.toString('utf8'));
}

module.exports = {
    createToken,
    decodeToken
}

