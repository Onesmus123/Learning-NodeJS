const http = require('http');
const fs = require('fs'); // Import the fs (filesystem) module to read files
const PORT = 3000;

http.createServer((request,response) => {
    fs.readFile('demo_index.html', (error, data) => {
        response.writeHead(200, {'Content-Type': 'text/html'});
        if(error){
            response.write("Error"+ error.message); // Show error message
        }else{
            response.write(data);
        }
        response.end(); //End the response
    });
}).listen(PORT);

console.log(`Server Running on http://localhost:${PORT}`);