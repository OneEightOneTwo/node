// 引入mysql模块
var mysql = require('mysql');
// 创建连接 初始化
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'lin',
    password: '12345678',
    port: 8889, // 不写的话默认3306
    // 操作的库名
    database: '1812'
});

// 进行连接
connection.connect();
// 执行sql语句
connection.query('SELECT * FROM students', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

// 关闭连接
connection.end();