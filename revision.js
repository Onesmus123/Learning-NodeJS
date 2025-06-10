// My Revision.

const http = require('http');
const fs = require('fs');
const port = 3000;

const events = require('events');
const { log } = require('console');
const eventEmitter = new events.EventEmitter();

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("Hello World! I am Kamwaare!");
    response.end()
}).listen(port, (error) => {
    if(error){
        console.log("Error: "+ error)
    }else{
        console.log(`Server running on http://localhost:${port}`);
    }
});

fs.readFile('./input.txt', (error,data) => {
    if(error){
        console.log(error)
    }else{
        console.log(data.toString())
    }
})
console.log("Program Ended!");

eventEmitter.on("order-pizza", (size) => {
    console.log("Order received. Preparing a " + size + " pizza!")
})
eventEmitter.emit("order-pizza", "large");

console.log(eventEmitter.listenerCount("order-pizza"));
console.log(__filename);
console.log(__dirname)

