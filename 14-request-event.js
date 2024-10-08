const http=require('http');

const server=http.createServer();

server.on('request',((req,res)=>{ //here request is even and it has to be named like that only
    res.write("hey");
    res.end();
    console.log('hello');
}));

server.listen(5000);