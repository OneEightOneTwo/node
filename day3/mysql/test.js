let db = require('./pool.js');
db('select * from students', null, (data) => {
    console.log(data);
});