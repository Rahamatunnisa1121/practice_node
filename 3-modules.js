//Modules ->Encapsulated code 

/*
CommonJs->used in nodejs where we use require,exports
 to import and export modules
It is synchronous in nature means that when you use require(), the module is loaded and executed immediately.
CommonJS was initially developed to bring a module system to server-side JavaScript (Node.js).
every file is a module by default
*/

const names=require('./4-names.js');
const sayHi=require('./5-utils.js');
const data=require('./6-alternative_flavour.js');
require('./7-mindgrenade.js'); // as nothing is exported 
console.log(data);
// sayHi('ruhi');
// sayHi(names.name1);
// sayHi(names.name2);