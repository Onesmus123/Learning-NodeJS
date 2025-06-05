const http = require('http');
const uc = require('upper-case'); // External package for converting strings to uppercase

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'text/html'}); // Sets response header
    response.write(uc.upperCase("I am Onesmus Mutyauvyu.")); // Converts to uppercase
    response.end(); // Ends the response
}).listen(3000); 

console.log(`Server running on http://localhost:3000`);
