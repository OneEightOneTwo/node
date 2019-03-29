var mysql = require('mysql');
// 创建连接池
var pool = mysql.createPool({
    connectionLimit: 10, // 限制连接数量
    host: 'localhost',
    user: 'lin',
    password: '12345678',
    port: 8889, // 不写的话默认3306
    // 操作的库名
    database: '1812'
});

let db = (sql, params, callback) => {
    // 执行连接
    pool.getConnection(function (err, connection) {
        if (err) throw err; // not connected!
        // Use the connection
        connection.query(sql, [params], function (error, results, fields) {
            console.log(results);
            callback(results);
            // When done with the connection, release it.
            connection.release();
            // Handle error after the release.
            if (error) throw error;
            // Don't use the connection here, it has been returned to the pool.
        });
    });
}

module.exports = db;