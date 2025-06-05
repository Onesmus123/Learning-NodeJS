// The fs.open() method takes a "flag" as the second argument
// If the flag is "w" for "writing", the specified file is opened for writing. 
// If the file does not exist, an empty file is created.

const fs = require('fs');

fs.open('demo_index.html', 'w', (error, fd) => {
    console.log("Attempting to open file for writing...");
    if(error){
        console.log("Error opening file:", error);
    }else{
        console.log("File opened successfully!");
        console.log("File descriptor:", fd)
    }
});