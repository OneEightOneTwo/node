let db = require('./mongo.js');
console.log(db);;
(async () => {
    // let data = await db.find('students', {
    //     age: 19
    // });
    let data = await db.insert('students', [{
        'name': 'lemon',
        'age': 16
    }]);
    console.log(data);
})();