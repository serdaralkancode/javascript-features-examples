// Fetch API is asynchron data transfer API instead of AJAX
// Together -> Fetch API & Promise

function getRest()
{
    fetch('https://api.github.com/orgs/reactjs')
        .then(response => response.json())
        .then(data => {
                console.log(data) 
        })
        .catch(error => console.error(error))
}


function getTextFile()
{

    fetch("example.txt")
        .then(response => response.text)         
        .then(data => console.log(data))                
        .catch(err => console.error(err));                    

}

function getJsonFile()
{
    fetch("example.json")
        .then(response => response.json)
        .then(data => console.log(data))
        .catch(err => console.error(err));
}

getTextFile();
getJsonFile();
getRest();
