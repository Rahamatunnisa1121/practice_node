//asynchronous functions of fs

const {readFile,writeFile}=require('fs');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first=result;
    console.log("File1 done");
    //after first file is completely read
    readFile('./content/second.txt','utf8',(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=data;
        console.log('done with file2');
        writeFile('./content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            {flag:'a'},
            (err,res) => {
                if (err) {
                    console.log('Error writing to file:', err);
                    return;
                }
                console.log('File written successfully:',res);
            }
        );
    });
});
console.log("file1 is being read");