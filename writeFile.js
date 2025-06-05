// The fs.writeFile() method replaces the specified file and content if it exists. 
// If the file does not exist, a new file, containing the specified content, will be created

const fs = require('fs');

fs.writeFile('demo_index.html', 'I am a Software Developer!', (error) => {
    if(error){
        console.log(error);
    }else{
        console.log("Successful!");
    }
})