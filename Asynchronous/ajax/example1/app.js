document.getElementById("btn").addEventListener("click",function(){

    const xhr = new XMLHttpRequest();

    //readyState == 3
    xhr.onprogress = function()
    {

        console.log("onprogress");
        console.log(this.readyState);
        
    }

    //run this -> when response is getting ready
    xhr.onload = function()                        
    {
        // readyState== 4
        if(this.readyState == 4)
        {
            console.log("onload oldu");
            console.log(this.readyState);
            console.log(this.responseText);
            document.getElementById("sonuc").textContent = this.responseText;
        }
    }
    
    xhr.open("GET","example.txt",true);

    xhr.send();
});