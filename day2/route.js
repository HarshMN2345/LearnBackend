const http = require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    if(req.url=='/'){
        res.write("<h1>home page</h1>")
        res.end("this is the home page");
    }else if(req.url=='/about'){
        res.write("<h1>About Page</h1>");
        res.end("this is the about page");

    }else{
        res.write("<h1>404 Page Not Found</h1>");
        res.end("this is the 404 page");
    }
})

server.listen(3000,()=>{
    console.log("server started on port 3000");
})