// The fs.rename() method renames the specified file.

const fs = require('fs');

fs.rename('renameFile.js', 'renamed.js', (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log("File renamed successfully!");
    }
});
