const http=require('http');

const server=http.createServer((req,res)=>{
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.headers);
    // console.log(req.body);
    // res.write('Welcome to our home page');
    // res.end();


    if(req.url==='/')
    {
        res.write('Welcome to our home page');
    }
    if(req.url==='/about')
    {
        res.write('Welcome to our about page');
    }
    res.end();
});

server.listen(5000);