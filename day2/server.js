const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.write("<h1>hello world</h1>")
    res.end("this is the response");
    console.log("request recieved:",req);

})
//starts the http server for listening for connections

server.listen(3000,()=>{
    console.log("server started on port 3000");
})