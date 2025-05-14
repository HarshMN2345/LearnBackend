//callback hell 

// setTimeout(()=>{
//     setTimeout(()=>{
//         setTimeout(()=>{
//             console.log('3')
//         },1000)
//     })
// })
//another example of callbackhell
const fs=require("fs");
fs.readFile("callback.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error reading file: "+err);
    }
    const modifiedData=data.toUpperCase();
    if(!fs.existsSync("output.txt")){
        fs.writeFile("output.txt",modifiedData,(err,data)=>{
            if(err){
                console.log("Error writing file: "+err);
            }else{
                console.log("file created output.txt");
            }
        })
    }
})