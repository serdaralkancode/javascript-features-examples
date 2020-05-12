// BEFORE ES6

function PersonOld(name,age){                                                  

    this.name = name;                                                      
    this.age = age;

}

PersonOld.prototype.showInfo = function()                                    
{                                                                          
    console.log("info :" + this.name + " " + this.age);
}

const k1 = new PersonOld("hakan",30); 


// ES6

class PersonNew {

    constructor(name,age)       //constructor
    {
        this.name = name;
        this.age = age;
    }

    showInfo()          //Prototype -> Functions in class inside -> Prototype
    {                                                                           
        console.log("info :" + this.name + " " + this.age);
    }

}

const k2 = new PersonNew("hakan",30);