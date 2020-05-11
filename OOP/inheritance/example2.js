function MyObject()
  {

  }

  MyObject.prototype.test1 = function() {
    
    console.log("MyObject prototype test1");
  }

  MyObject.prototype.test2 = function() {
    
    console.log("MyObject prototype test2");
  }


  function MyOtherObject(name,age)
  {
    this.name = name;
    this.age = age;
  }

  // MyOtherObject inherited MyObject's test1 and test2 function (test1 and test2 defined in prototype)
  MyOtherObject.prototype = Object.create(MyObject.prototype);


  const obj1 = new MyOtherObject("Serdar",35);
  obj1.test1();    // MyObject prototype test1