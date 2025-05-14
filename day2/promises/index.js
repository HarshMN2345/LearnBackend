function delFunction(time){
    return new Promise((resolve)=>{
         setTimeout(resolve, time);
    })
}
delFunction(3000).then(()=>{
    console.log("3 seconds passed now promise is resolved");
})
console.log("end");

function dividenumbers(a,b){
   return new Promise((resolve,reject)=>{
     if(b==0){
        reject("cant be divided by 0");
     }
     resolve(a/b);
   })
}
dividenumbers(10,2).then((result)=>{
    console.log("result is: "+result);
}).catch((err)=>{
    console.log("error: "+err);
})