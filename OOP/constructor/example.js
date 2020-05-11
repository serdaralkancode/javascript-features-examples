function Person(name,age,salary)                            
	{
		this.name =name;
		this.age = age;
		this.salary = salary;


		this.showInfo = () => {

			console.log(this.name,this.age,this.salary);
		}
    }
    
    //instance
    let k1 = new Person("Mehmet",28,5000);
	k1.showInfo();

    //instance
	let k2 = new Person("Ahmet",32,8500);
    k2.showInfo();
    
