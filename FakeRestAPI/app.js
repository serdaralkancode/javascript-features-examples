class Request {

    constructor()
    {
         this.xhr = new XMLHttpRequest();
    }

    //GET
    get(url,callback)
    {
        console.log("get method");
        this.xhr.open("GET",url);

        this.xhr.onload = () =>
        {
            console.log(this);
            if(this.xhr.status === 200)
            {
                callback(null,this.xhr.responseText);        // isteğimiz bitince bu fonksiyon calissin.callback bu yuzden kullaniyoruz
            }
            else
            {
                callback("Bir hata durumu oluştu",null);
            }
        }

        this.xhr.send();
    }

    post(url,data,callback)
    {
        console.log("post method");
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json");  //Json type


        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status   => POST code
        this.xhr.onload = () =>
        {
            if(this.xhr.status === 201)
            {
                callback(null,this.xhr.responseText);
            }
            else
            {
                callback("Hata oluştu",null);
            }
        }

        this.xhr.send(JSON.stringify(data));                    // Json to string convert
    }

}


const req = new Request();

function getObject()
{
    console.log("get object method");

    req.get("https://jsonplaceholder.typicode.com/albums",function(err,response) {

        if(err === null)
        {
            console.log(response);
        }
        else
        {
            console.log(err);
        }
    
    });
}

function postObject()
{
    console.log("post object method");
    req.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"instagram album"},function(err,donenDeger) {

    if(err === null)
    {
        console.log(donenDeger);
    }
    else
    {
        console.log(err);
    }

})
}
