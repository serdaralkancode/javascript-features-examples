let ornekObject;


//Object
const personObj = {

    name: "Hakan",                  //props
    age: 35,
    langs: ["Turkish","English"],

    // object inside object
    address: {
            country: "Turkey",
            city: "Ankara"
    },

    //object function
    work : function()         
    {
        console.log(this.name + " " + this.age);
    }
}


ornekObject = personObj;

nameExample = ornekObject.name;
console.log(nameExample)
//or
nameExample2 = ornekObject["name"];
console.log(nameExample2);


cityExample = ornekObject.address.city;
console.log(cityExample);

ornekObject.work();

//-----------------------------------------------

const carList = [

        {model:"Ford",color:"White",year:2015},
        {model:"BMW",color:"Black",year:2013}

]

ford = carList[0];

console.log(ford);

//-------------------------------------------------

var emp = new Object();
emp.name = "Cihan";
emp.age = 30;
emp.location = "Turkey";

console.log(emp);

var emp1 = emp;
emp1.age = 40;        // mutable object -> change emp object age prop

console.log(emp);

//-------------------------------------

for (prop in personObj)
{
    console.log(prop);          // list of object's props
}

//-------------------------------------

var arr = Object.values(personObj);  // arr -> values of object's props

//-------------------------------------

var str = JSON.stringify(personObj);  // personObj convert to json string

//Output:
//{"name":"Hakan","age":35,"langs":["Turkish","English"],"address":{"country":"Turkey","city":"Ankara"}}

// not stringfy function