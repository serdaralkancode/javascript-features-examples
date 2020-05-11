var ExampleClass1 = function() {
    this.member1 = "member1Example";
};

ExampleClass1.prototype.function1 = function() {
    return "ExampleClass1 prototype function1 call";
};


var instance1 = new ExampleClass1();

var instance2 = Object.create(MyClass1.prototype, {
    
    "member2": {
      value: "member2Example",
      writable: true
    }}); 


    console.log("instance1.member1: "+ instance1.member1);              //member1Example
    console.log("instance1.function1: "+ instance1.function1());        //ExampleClass1 prototype function1 call
    console.log("instance2.member1: "+ instance2.member1);              //undefined
    console.log("instance2.member2: "+ instance2.member2);              //member2Example
    console.log("instance2.function1: "+ instance2.function1());        //ExampleClass1 prototype function1 call
    console.log("instance1.member2: "+ instance1.member2);              //undefined