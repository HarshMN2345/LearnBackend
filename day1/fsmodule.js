const fs=require("fs");
const path=require("path");
const dataFolder=path.join(__dirname,"data");
if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("data folder created");
}


//async
const asyncfilePath=path.join(dataFolder,"exampleasync.txt");
if(!fs.existsSync(asyncfilePath)){
    fs.writeFile(asyncfilePath,"this is the example async file",function(err){
        if(err){
            console.log("Error writing file: "+err);

        }else{
            console.log("file created "+path.basename(asyncfilePath));
        }
    })
}
fs.readFile(asyncfilePath,"utf-8",function(err,data){
    if(err){
        console.log("Error reading file: "+err);
    }else{
        console.log("file content: "+data);
    }
})
//sync
const filePath=path.join(dataFolder,"example.txt");
if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath,"this is the example file");
    console.log("file created "+path.basename(filePath));
}

const readfromfile=fs.readFileSync(filePath,"utf-8");
console.log("file content: "+readfromfile);
