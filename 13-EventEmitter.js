const EventEmitter=require('events');
//EventEmitter is a class provided by Node.js to help you work with event-driven programming.

const custoEmitter=new EventEmitter();
//instance of the class is created

//on->to register a listener for the event. 
//emit->to trigger the registered listener
//here the callback is the listener function
custoEmitter.on('response',(name,id)=>{
    console.log(`data received from ${name} with id::${id}`);
});//response is the name of the event

custoEmitter.on('response',()=>{
    console.log(`some other logic`);
});//can be registered any number times

custoEmitter.emit('response','john',34);// This should match the event name that you registered a listener for (in this case, 'response').

//first register the listener, then trigger it. The order should be followed