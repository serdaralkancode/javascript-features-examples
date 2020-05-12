class Person {                    //SuperClass, BaseClass

    constructor(name,age)                                                       
    {
        this.name = name;
        this.age = age;
    }

    showInfo()                                                               
    {                                                                          
        console.log("info :" + this.name + " " + this.age);
    }

}

class Employee extends Person {                   //DerivedClass,SubClass,ChildClass

    constructor(name,age,salary)                  // constructor                                                     
    {
        // this.name = name;
        // this.age = age;
        super(name,age);                           
        this.salary = salary;
    }

    //Override
    showInfo()                                                               
    {                                                                          
        console.log("info :" + this.name + " " + this.age + " " + this.salary);
    }

    increaseSalary(amount)                     //Extra method
    {
        this.salary +=amount;
    }

}

const emp = new Employee("Mehmet",30,10000);
emp.increaseSalary(1000);
emp.showInfo();