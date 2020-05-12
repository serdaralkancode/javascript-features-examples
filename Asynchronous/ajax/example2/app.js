document.getElementById("ajax").addEventListener("click",getAllEmployees);

function getAllEmployees() 
{
    const xhr = new XMLHttpRequest();
    xhr.open("GET","employees.json",true);

    xhr.onload = function()                         
    {
        console.log("status" + this.status);
        if(this.status == 200)
        {
            console.log(xhr.responseText);
        }
    }

    xhr.send();
}