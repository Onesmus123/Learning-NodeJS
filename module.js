//To include a module, use the require() function with the name of the module

//Create Your Own Modules
//Use the exports keyword to make properties and methods available outside the module file.

exports.dateNow = function myDate (){
    const date = new Date().toLocaleString();
    return date;
 }


