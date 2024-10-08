var http=require('http');
var fs=require('fs');

http.createServer((req,res)=>{
    const text=fs.createReadStream('./content/bigFile.txt',{encoding:'utf8'});
    res.writeHead(200,{'Content-Type':'text/plain'});
    // text.on('data',(result)=>{
    //     res.write(result);
    // });
    // text.on('end',()=>{
    //     res.end();
    //     console.log("Finished responding to the server..");
    // });
    text.on('open',()=>{
        text.pipe(res); //pipes the readable stream directly into the response object res.
        // without needing to handle each chunk manually.
    });//The open event is emitted when the stream is ready for reading.
    text.on('error',(err)=>{
        res.writeHead(500,{'Content-Type':'text/plain'});
        console.log(err);
        res.end();
    });  
    
    // const text=fs.readFileSync('./content/bigFile.txt',{encoding:'utf8'});
    // res.end(text);
}).listen(5000);
