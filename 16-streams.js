// Node.js uses streams as a way to handle reading and writing data in a more efficient manner 
// than loading everything into memory at once. 

//streams allow you to process data piece by piece (chunk by chunk)
const {createReadStream}=require('fs');
const stream=createReadStream('./content/bigFile.txt',{ encoding: 'utf8' },{highWaterMark:9000});

//setting up an event listener for the 'data' event on the stream object.
stream.on('data',(result)=>{
    //The result parameter represents the chunk of data that has been read from the stream.
    console.log(result);
});
//The data event is emitted whenever the stream has a new chunk of data available to be read.

stream.on('close',()=>{
    console.log("File reading completed..");
});
//the close event is called when the file is completed

stream.on('error',(err)=>{
    console.log(err);
});