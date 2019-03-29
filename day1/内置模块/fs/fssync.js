const fs = require('fs');

console.log(1);
// 同步去读取文件
let data = fs.readFileSync('./input.txt');
console.log(data.toString());
console.log(2);