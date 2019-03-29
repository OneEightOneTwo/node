// require('')放内置模块的名字的时候，那就是引入内置模块
// node提供给你的原生方法
const fs = require('fs');
// console.log(fs);
console.log(1)
fs.readFile('./input.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});
console.log(2);
// 并且使用fs的unlink方法，异步方法
// fs.unlink('/tmp/hello', (err) => {
//     if (err) throw err;
//     console.log('successfully deleted /tmp/hello');
// });

// button.addEventListener('click',()=>{

// })

// console.log('1')
// setTimeout(()=>{
//     console.log('2')
// },1000);
// console.log('3')

// function a(callback) {
//     console.log(1)
//     setTimeout(()=>{
//         callback()
//     })
// }

// function b(){
//     console.log(2)
// }

// a();
// b();

// a(function b() {
//     console.log(2)
// })