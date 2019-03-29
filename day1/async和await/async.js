let a = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(1)
            resolve('hello')
        },1000)
    })
}

let b = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(2)
            resolve('world')
        },2000)
    })
}

// a().then(b)
;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;(async()=>{
    console.log(0);
    let name = await a();
    console.log(name);
    let name2 = await b();
    console.log(name2);
})();
;;;;
;;;
;;
;


