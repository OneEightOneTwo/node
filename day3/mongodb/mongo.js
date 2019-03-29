// init mongodb client
const {
    MongoClient
} = require('mongodb');
// connect url
const url = 'mongodb://localhost:27017';
// database name
const dbName = '1812';

// 封装了连接方法，释放db
let connect = () => {
    return new Promise((resolve, reject) => {
        // Use connect method to connect to the server
        MongoClient.connect(url, function (err, client) {
            if (err) throw err;
            // select db
            const db = client.db(dbName);
            resolve({
                db,
                client
            });
        })
    })

}
// 查询
let find = (col, obj) => {
    return new Promise(async (resolve, reject) => {
        const {
            db,
            client
        } = await connect();
        const collection = db.collection(col);
        collection.find({
                // 解构
                ...obj
            })
            .toArray((err, docs) => {
                if (err) throw err;
                resolve(docs);
                client.close();
            })
    })
}


// 增加
let insert = (col, arr) => {
    return new Promise(async (resolve, reject) => {
        const {
            db,
            client
        } = await connect();
        const collection = db.collection(col);
        collection.insertMany([
            ...arr
        ], function (err, result) {
            if (err) throw err;
            resolve(result);
            client.close();
        })
    })
}

module.exports = {
    connect,
    find,
    insert
}