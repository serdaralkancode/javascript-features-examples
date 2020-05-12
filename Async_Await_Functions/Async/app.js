// async  -> return a Promise object
// not using new Promise -> async -> new Promise

async function getData(data) 
{
    return data;

    //if you want, you can write code as follows
    /*
        return new Promise((resolve,reject) => {

            resolve(data) ;
        });
    */
}

console.log(getData("Hello"));


// If you want, you can write code as follows

    getData("String text").then(response => console.log(response));