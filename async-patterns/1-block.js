//non-blocking code in the event-loop

// const http=require('http');
// const server=http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.end("You are in Home page");
//     }
//     else if(req.url==='/about'){
//         res.end("You are in About page");
//     }
//     else{
//         res.end("error page..");
//     }
// });
// server.listen(5000,()=>{
//     console.log("Server is listening..");
// });

//blocking code
const http=require('http');
const blockingOperation = () => {
    // Simulate a blocking task
    const start = Date.now();
    while (Date.now() - start < 5000) {} // Blocks for 5 seconds
};

const server = http.createServer((req, res) => {
    if(req.url==='/'){
        res.end("You are in Home page");
    }
    else if(req.url==='/about'){
        blockingOperation(); // This will block the event loop
        console.log("About unblocked");
        res.end("You are in About page");
    }
    else{
        res.end("error page..");
    }
});
//not only about page, but the other pages also get blocked :(
server.listen(5000,()=>{
    console.log("Server is listening..");
});
console.log("start");