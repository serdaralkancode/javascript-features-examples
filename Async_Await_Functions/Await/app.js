
//Example 1
async function test(data)
{
    let promise = new Promise((resolve,reject) => {

        setTimeout(() => {

            resolve("ok");
        },5000);
    });

    let response = await promise;  // await -> wait until promise is resolve
                                  // after 5 minutes, promise return resolve and run other code
                                  // await -> run only a async function
    
    console.log(response);
    console.log("string text");
}


test("hello");


// Example 2

async function test2(data)
{
    let promise = new Promise((resolve,reject) => {

        setTimeout(() => {

            resolve("this is string text");
        },6000);
    });

    let response = await promise;  
                                  
                                  
    
    return response;            
}


test2("hello").then(response => console.log(response)); 