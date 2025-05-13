//path module

const path=require("path");
const directoryPath=path.dirname(__filename);
console.log("Directory Path:",directoryPath);
const filePath=path.basename(__filename);
console.log("File Path:",filePath);
const extname=path.extname(__filename);
console.log("File Extension:",extname);


