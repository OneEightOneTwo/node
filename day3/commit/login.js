
// POSTMAN
var request = require('request');

// 登录逻辑
request.post({
    url: 'http://stu.1000phone.net/student.php/public/login',
    formData: {
        Account: '',
        PassWord: ''
    }
}, function optionalCallback(err, httpResponse, body) {
    if (err) {
        return console.error('upload failed:', err);
    }
    let {
        headers
    } = httpResponse;
    // 获取cookie
    console.log(headers['set-cookie'][0]);
    console.log(headers['set-cookie'][1]);
    console.log(headers['set-cookie'][2]);


    // console.log('Upload successful!  Server responded with:', body);
});


