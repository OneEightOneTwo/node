const {
  MongoClient,
  ObjectId
} = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = '1810';
// Use connect method to connect to the server

let connect = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (err, client) => {
      if (err) {
        reject(err)
      } else {
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        resolve({
          db,
          client
        })
      }
    });
  })
}

let insert = (col, arr) => {
  return new Promise(async (resolve, reject) => {
    let {
      db,
      client
    } = await connect();
    const collection = db.collection(col);
    collection.insertMany(arr, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result);
        client.close();
      }
    })
  })
}

let find = (col, obj) => {
  return new Promise(async (resolve, reject) => {
    let {
      db,
      client
    } = await connect();
    const collection = db.collection(col);
    collection.find({
      ...obj
    }).toArray(function (err, docs) {
      if (err) {
        reject(err)
      } else {
        resolve(docs);
        client.close();
      }
    });
  })
}
let sort = (col, obj, obj2) => {
  return new Promise(async (resolve, reject) => {
    let {
      db,
      client
    } = await connect();
    const collection = db.collection(col);
    collection.find({
      ...obj
    }).sort({
      ...obj2
    }).toArray(function (err, docs) {
      if (err) {
        reject(err)
      } else {
        resolve(docs);
        client.close();
      }
    });
  })
}

module.exports = {
  connect,
  insert,
  find,
  ObjectId,
  sort
}

// node express mongodb jquery