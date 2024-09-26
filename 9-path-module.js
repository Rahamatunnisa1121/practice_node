const path=require('path');

//to find the path seperator
console.log(path.sep);

//to join the contents into a path
const filePath=path.join('/content','subfolder','test.txt');
console.log(filePath);

//to get the basename -> test.txt
console.log(path.basename(filePath));

//to get the absolute path to the application
const absolute=path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);