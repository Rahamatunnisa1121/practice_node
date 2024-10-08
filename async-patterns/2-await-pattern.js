//without nesting one callback in the other, we can just use promises and async/await,so that the operations are done synchronously when required, aslo when following the async approch to other lines of cosde outside the async function
const {readFile,writeFile}=require('fs').promises;
//This means you can use readFile and writeFile from the promises API without needing to promisify them manually.

//const util=require('util');
const firstPath='./content/first.txt';
const secondPath='./content/second.txt';

// const readFilePromise=util.promisify(readFile);
// const writeFilePromise=util.promisify(writeFile);
//This function converts a function that follows the Node.js callback pattern into a function that returns a Promise.
//The original readFile and writeFile functions take a callback as their last argument to handle the result (or error) after the operation completes. By using util.promisify(), we create new functions (readFilePromise and writeFilePromise) that return Promises instead of requiring a callback.

// getText=(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{ //asynchronous
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         });
//         console.log("Waiting..");//so this gets executed first
//     });
// };

// getText(path)
// .then(result=>console.log(result))
// .catch(err=>console.log(err));

const start=async()=>{
    // const first=await getText(path)
    // .then(result=>console.log(result))
    // .catch(err=>console.log(err));
    try{
        //const first=await getText(firstPath);
        const first=await readFile(firstPath,'utf8');
        //The await keyword is used to pause execution until the file reading is complete.
        console.log("first done");
        // const second=await getText(secondPath);
        const second=await readFile(secondPath,'utf8');
        console.log("second done");
        console.log(first,second);
        await writeFile('./content/result-gernade.txt',`Result of first and second: ${first} and ${second}`,{flag:'a'});
    }
    catch(err){
        console.log(err);
    }
    //the async function is not executed until the await completes
    console.log("Completed..");
}

start();
console.log("reading file.."); //as the readFile is async, this statement is executed