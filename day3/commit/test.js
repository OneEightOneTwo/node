var request = require('request');
request.post({
    url: 'http://stu.1000phone.net/student.php/index/start_evaluate',
    formData: {
        'WDgDBw': '1_0_10',
        'zTKCku': '265_0_10',
        'ic10lb': '344_0_10',
        'K2N8Cf': '33_0_10',
        'kKtEEF': '237_0_10',
        'mwrBBf': '241_0_5',
        '4HzU3n': '201_0_5',
        'Lp1pEJ': '269_0_5',
        't2zJ83': '245_0_5',
        'yE7g2w': '249_0_10',
        'SzDgzZ': '340_0_10',
        'Arj3aA': '257_0_5',
        'xPzBtU': '261_0_5',
        'YIUrmG_45_0_0': '666',
        'Nf8QDS_46_0_0': '666',
        'record_id': '26711',
        'type_id': '154',
        'k': 'nJ6VdJRjbmyIqd6gnJGhl3ZhZmhW05bJ0NeZw56UoWVvbGJo'
    },
    headers: {
        // 登录信息
        // 伪造cookie帮助突破密码和账号登录
        'Cookie': `PHPSESSID=6cbnp69r4ij8rgpi81ri1j7250;StuInfo=think%3A%7B%22StuId%22%3A%22127466%22%2C%22StuNumber%22%3A%22GZ181213024%22%2C%22IDcard%22%3A%22ZmRmm5OXYmRmZWmSaG6YmJpm%22%2C%22StuName%22%3A%22%25E6%25A2%2581%25E6%25B5%25B7%25E6%25B1%259F%22%2C%22Cid%22%3A%222283%22%7D;SERVERID=7f2506d563fc3b1a58ea5e805a0066cd|1553673211|1553673211;`
    }
}, function optionalCallback(err, httpResponse, body) {
    if (err) {
        return console.error('upload failed:', err);
    }
    console.log(body);

    // console.log('Upload successful!  Server responded with:', body);
});