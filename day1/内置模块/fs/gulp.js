const fs = require('fs'); //node提供的内置模块方法
console.log(1);

let gulp = {
    // 导出
    output:(src,data)=>{
        return new Promise((resolve,reject)=>{
            fs.writeFile(src, data, (err) => {
                if (err) throw err;
                console.log('文件已被保存');
            });
        })
    },
    // 导入
    input:(src)=>{
        return new Promise((resolve,reject)=>{
            fs.readFile(src, (err, data) => {
                if (err) throw err;
                resolve(data.toString());
            });
        })
    }
}

gulp.input('./input.txt').then((data)=>{
    console.log(data)
    gulp.output('./input.txt',`${data}123456`).then((data)=>{
        console.log(data)
    })
})

await async


