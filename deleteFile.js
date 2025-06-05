// The fs.unlink() method deletes the specified file

const fs = require('fs');

fs.unlink('delete_index.html', (error) => {
    if(error){
        console.log(error);
    }else{
        console.log("File deleted Successfully");
    }
})