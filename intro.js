// Node.js uses JavaScript on the server
// Node.js uses asynchronous programming!
// Node.js eliminates the waiting, and simply continues with the next request.

const http = require('http'); // Create HTTP instance

const dt = require('./module');

const port = 3000;

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(`Hello World! This is my first NodeJS application! TESTING MODULES: The current date and time is: ${dt.dateNow()}`);
}).listen(port, (error) => {
    if (error) {
        console.error("Error starting server:", error);
    } else {
        console.log(`My first NodeJS app is running on: http://localhost:${port} ${dt.dateNow()}`);
    }
});
