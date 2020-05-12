// PROMISE -> to fix callback hell

function addTwo(number)
{
    return new Promise((resolve,reject) => {

        setTimeout(function() {

            if(typeof number === "number")
            {
                resolve(number+2);
            }
            else
            {
                reject(new Error("Please enter a number"));
            }

        },3000);

    })
}

addTwo(10)
    .then(response => {
        
        console.log(response);
        return response+2;                              //Return Promise Object
    })
    .then(response2 => console.log(response2))            //
    .catch(err => console.error(err));                    // using catch one times