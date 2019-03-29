console.log("day1");
let num = 1;
// setInterval(()=>{
//     console.log(num++);
// },1000);

// 失去DOM和BOM能力
// DOM  document window
// 对html和css节点的增删查改
// BOM  location
// 浏览器的前进后退，重定向等
// console.log(location);
// require是内置(原生)方法，接受一个路径
// 绝对路径和相对路径
// 把common.js的逻辑引入到index.js里面，并把它保存为一个变量
let common = require('./common');
console.log(common.add(7,8));
console.log(common.multi(7,8));
console.log(common)

let lib = require('./lib');
console.log(lib);