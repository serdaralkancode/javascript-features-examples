// Synchron process

function process1()
{
    setTimeout(function(){

            console.log("process1");
    },3000);
}

function process2()
{
    setTimeout(function(){

            console.log("process2");
    },2000);
}

process1();
process2();
console.log("hello");

//OUTPUT
/*
    hello
    process2
    process1
*/


// callback
// if you run process4 after process3

function process3(callback)             //callback is alias anything
{
    setTimeout(function(){

        console.log("process3");

        callback();                     //running callback function (process4)
    },3000);
}
function process4()
{
    setTimeout(function(){

            console.log("process4");
    },2000);
}

process3(process4);         //process2 function parameter for process1 function

//OUTPUT
/*
    process3
    process4

*/
