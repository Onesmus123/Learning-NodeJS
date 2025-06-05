const fs = require('fs');

fs.stat('demo_index.html', (err, stats) => {
    if(err){
        console.log(err);
    }else{
        console.log(stats);
        console.log("Got file info successfully!");
        console.log(`Is File? ${stats.isFile()}`); // Checks if it's a regular file
    }
})