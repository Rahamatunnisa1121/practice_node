//synchronous fs methods

const {readFileSync,writeFileSync}=require('fs');

const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');
console.log(first);
console.log(second);
console.log("files are read");

//if the destination file is not there, it will be created
writeFileSync('./content/result.txt',
    `Here is the result: ${first}, ${second}`,
    {flag:'a'}
);
console.log("file is written");