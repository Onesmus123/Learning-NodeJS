// Node.js program to demonstrate the fs.createReadStream() method

// Import fs module
const fs = require('fs');

// Use fs.createReadStream() method to read the file
const reader = fs.createReadStream('./input.txt',{
    flag: 'r',
    encoding: 'utf8',
    start: 5,
    end: 100,
    highWaterMark: 24
});

// Read and display the file data on console
reader.on('data', (chunk) => {
    console.log(chunk.toString());
});