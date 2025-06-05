// The fs.appendFile() method appends specified content to a file. 
// If the file does not exist, the file will be created

const fs = require ('fs');

    fs.appendFile('demo_index.html', '<p>This paragraph has been appended</p>', (error) => {
        if(error){
            console.log("Error appending to file:", error);
        }else{
            console.log("Content successfully appended.");
        }
    });