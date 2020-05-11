function Person(name,age){       

    this.name = name;                                                      
    this.age = age;

    // this.showInfo = function()                                        
    // {                                                                    
    //     console.log("info  :" + this.name + " " + this.age);
    // }
}

// NOTE : Every object has default constructor object 
// NOTE : Every object has prototype (proto)
// NOTE : Some methods (toString() etc.) defined in object's prototype.
//        When we crate a object, not defined toString function. Because it defined in prototype


// NOTE : If we define showInfo function inside object, every instance we create, defined again again this function
//        Memory problem

// NOTE : But we define showInfo function inside object's prototype, every instance we create, one time defined


Person.prototype.showInfo = function()                  // One time defined, every instance we create, not crated again again
{                                                       // This function created in object default constructor
    console.log("info :" + this.name + " " + this.age);
}

// k1 has showInfo. new Person -> not create showInfo again
const k1 = new Person("ali",30);   

// k2 has showInfo. new Person -> not create showInfo again
const k2 = new Person("kemal",20);

console.log(k1);
console.log(k2);

console.log(k1.showInfo());
console.log(k2.showInfo());