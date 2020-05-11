// new -> Call Object Constructor

// Object.create -> Call Object Prototype

//Example1

function Person(name,age){       

    this.name = name;                                                      
    this.age = age;

    console.log("Person constructor")

    this.method1 = function()                                        
    {                                                                    
        return "hello";
    }
}

Person.prototype.showInfo = function()                  
{                 
    return "info : " + this.name + " " + this.age;                                      
    
}

Person.prototype.printStr = function()                  
{                 
    return "Person printtStr";                                      
    
}

// new -> Call constructor
const k1 = new Person("ali",30);

// Object.create  -> Call object prototype
let k2 = Object.create(Person.prototype);

console.log("k1 : " + k1.name);
console.log("k2 : " + k2.name);  // undefined. Because name is defined constructor

console.log("k1 method1 : " + k1.method1());
//console.log("k2 method1 : " + k2.method1());  // ERROR -> k2 has not method1. method1 is defined constructor

console.log("k1.showInfo : " + k1.showInfo());
console.log("k2.showInfo : " + k2.showInfo());  // info : undefined undefined. => showInfo is defined prototype but name and age in constructor

console.log("k1.printStr : " + k1.printStr());  // Person printtStr
console.log("k2.printStr : " + k2.printStr());  // Person printtStr

//-------------------------------------------------------------------------------------