// const fs=require("fs");
// function loadModule(filename,module,require){
//     const wrappedSrc=`(function(module,exports,require){
//        ${fs.readFileSync(filename,'utf-8')} 
//     })`
//     eval(wrappedSrc);
// }
// const add=(a,b)=>{
//    return a+b;
// }
// const subtract=(a,b)=>{
//     return a-b;
// }
// module.exports={add,subtract};

// const logger=require("./p2.js");
// logger.log("this is gay");

// var fs=require('fs');
// const data=fs.readFile('hell.txt','utf-8',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
//     console.log("program is working")
// });

// const EventEmitter=require('events');
// const eventEmitter=new EventEmitter();
// eventEmitter.on('start',function(){
//     console.log("yash is eliminated");
// })
// eventEmitter.emit('start');
// const getSomething=()=>{
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//             resolve("yash is eliminated")
//        })
//     })
// }
// getSomething().then((data)=>{
//     console.log(data);
// });
let value = 1;



console.log(process.argv[2]);