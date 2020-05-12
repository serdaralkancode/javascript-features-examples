async function getData(url)
{
    const response = await fetch(url);  //Response Object

    const data = await response.json();  // Response Json

    console.log(data);
}

getData("https://api.exchangeratesapi.io/latest");