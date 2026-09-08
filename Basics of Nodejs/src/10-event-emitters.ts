// EventEmitter is a built-in Node.js class used to create, listen to, and trigger custom events.

// It follows the observer pattern: listeners subscribe to an event, and the emitter emits it when something happens.

// EventEmitter is commonly used in:
// - HTTP servers
// - streams
// - custom application events
// - async workflows

// emit one event -> listeners listen to this event ,do something

import { EventEmitter } from 'events';

const emitter = new EventEmitter();

type userRegisterPayload = {
    id : number,
    email : string
}

function registerUser() : void {
    const user = {
        id : 1,
        email : "aman@gmail.com"
    }

    console.log("User saved");
    emitter.emit("user:registered",user); // Ghoshna karo
}

// Register a listener for the event
emitter.on('greet', (name: string) => {
  console.log(`Hello, ${name}!`);
});

// Multiple listeners can be attached to the same event
emitter.on("user:registered",(user : userRegisterPayload)=>{
    console.log(`Email listener : Welcome sent to this user ${user.email}`);
}); // Ghoshna ko suno

emitter.on("user:registered",(user : userRegisterPayload)=>{
    console.log(`Log listener : user ${user.id} , user email : ${user.email}`);
});
// Emit the event and sends to the listeners
emitter.emit('greet', 'Alice');

// A listener that runs only once
emitter.once('start', () => {
  console.log('This runs only once.');
});

emitter.emit('start');
emitter.emit('start'); // will not trigger again

registerUser();
console.log('EventEmitter example completed.');
