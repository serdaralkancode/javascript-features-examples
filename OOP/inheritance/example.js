function Person(name,age)
{
  this.name = name;
  this.age = age;
}

//showInfo -> defined prototype
Person.prototype.showInfo = function()
{
    console.log("Name : " + this.name + " Age : " + this.age);
}

function Employee(name,age,salary)
{
  // this.name = name;           // name and age in defined Person
  // this.age = age;
  Person.call(this,name,age);   // Person.call -> call Person constructor
  this.salary = salary;                                 
}

// Employee's proto -> Person's proto (Employee has Person proto function)
// Employee inherited Person's prototype. Because Employee want to use showInfo method.
// showInfo method in Person's prototype. Not constructor!. 
Employee.prototype = Object.create(Person.prototype); 

//Override Person's showInfo function
Employee.prototype.showInfo = function()
{
  console.log("Name : " + this.name + " Age : " + this.age + " Salary : " + this.salary);
}

const emp = new Employee("Kemal",34,15000);
emp.bilgileriGoster(); 