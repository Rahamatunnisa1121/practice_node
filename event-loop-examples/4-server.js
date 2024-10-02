

//using server
const http=require('http');

const server=http.createServer((req,res)=>{
    console.log("Request event");
    res.end("HelloWorld");
});
//The server can continue to listen for more incoming requests 
//while processing the current one.

server.listen(5000,()=>{
    console.log("Server listening to the port 5000..");
});
//it does not block further code execution; instead, 
//it registers the server to listen for incoming requests asynchronously.

console.log("hi");