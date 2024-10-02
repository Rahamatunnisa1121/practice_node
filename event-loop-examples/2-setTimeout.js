//npm is a global command that comes with node
//to get version npm --v

//local dependency - to use it only in this partcular project
//command -> npm i <packageName>

//global dependency - to use it any project after installing
//npm i -g <packageName>

// npx <package-name>
// Runs a package directly without installing it globally.
//npx will check if the package is already installed locally (in node_modules) or globally, and if not, it will download and run it temporarily.

//package.json is a manifest file which stores the imp info about the project/package
//we can create package.json manually in root and create properties in it.
//we can use npm init(press enter to skip)
//or just npm init -y (default everything)


//using setTimeout
console.log("first");
setTimeout(()=>{
    console.log("second");
},0);
//Even with a setTimeout delay of 0ms, the callback is not executed immediately because it is asynchronous. 
//It has to wait for the synchronous code to finish, and then the event loop moves it from the callback queue 
//to the call stack. This illustrates the behavior of the JavaScript event loop and how asynchronous tasks like 
//setTimeout are handled in comparison to synchronous code.
console.log("Third");
console.log("Fourth");
setTimeout(()=>{
    console.log("fifth");
},0);//added to the next of first callback in the eventloop queue
console.log("Third");
console.log("sixth");