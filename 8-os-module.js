// const {version}=require('os');
// console.log({version});

const os=require('os');

//for info abt curr user
const user=os.userInfo();
console.log(user);

//to get uptime of system in sec
// console.log(os.uptime());
console.log(`The uptime of the system is ${os.uptime} seconds`);

const currUser={
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMem:os.freemem()
};

console.log(currUser);
