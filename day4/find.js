// init mongodb client
const {MongoClient}= require('mongodb');
// connect url
const url = 'mongodb://localhost:27017';
// database name
const dbName = '1812';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    // select db
    const db = client.db(dbName);
    // select collection
    const collection = db.collection('students');
    // Insert some documents
    collection.find({
        age: 18
    }).toArray((err, docs)=>{
        if(err) throw err;
        console.log(docs);
    })
    // chose connection
    client.close();
})

