//using readFile that is asynchronous

const {readFile}=require('fs');
console.log("Starting first task");
readFile('../content/first.txt','utf8',(err,res)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("The contents of the file are "+res);
    console.log("Completed first task");
});
console.log("Being read..");