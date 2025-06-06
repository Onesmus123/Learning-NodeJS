const events = require('events'); // Import the 'events' module from Node.js
const eventEmitter = new events.EventEmitter(); // Create an instance of EventEmitter


eventEmitter.on("myEvent", (age, county) => {
    console.log(`I am Onesmus Mutyauvyu. I am ${age} years old, from ${county}.`);
});

eventEmitter.on('myEvent', (age) => {
    if(age===26){
        console.log('Old enough to marry!');
    }
});

// List all the listeners attached to 'myEvent'
console.log(eventEmitter.listeners('myEvent'));

// Count the listeners registered to myEvent
console.log(eventEmitter.listenerCount('myEvent'));

// Triggering myEvent
eventEmitter.emit('myEvent', 26, 'Kitui County');