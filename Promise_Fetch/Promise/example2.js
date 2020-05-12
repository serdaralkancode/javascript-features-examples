function getData(data)          //function return Promise Object
{
    return new Promise(function(resolve,reject)
    {
        setTimeout(function(){

            if(typeof data === "string")
            {
                
                resolve(data);
            }
            else
            {
            
                reject(new Error("Please enter string number"));
            }
            
        },5000);
    });
}

//Example resolve (in actually using then and catch)
console.log(getData("This is a string text"));    // return Promise Object         


//Example resolve
getData("Hello").then(function(response){

    console.log("return value : " + response);      //

}).catch(function(err){

    console.log(err);
})

//Example reject
getData(24).then(function(response){

    console.log("return value : " + response);

}).catch(function(err){

    console.error(err);
})

//Example reject
//Arrow function
getData(24)
    .then(response => console.log("return value : " + response))
    .catch(err => console.error(err));