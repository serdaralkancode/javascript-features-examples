// Function Expression

// define function
const printName = function(name)
{
    console.log(name);
};

//function call
printName("Serdar");


// Immediately Invoked Function Expression (IIFE)
(function(name)
{
    console.log("Merhaba " + name);
})("Serdar") 