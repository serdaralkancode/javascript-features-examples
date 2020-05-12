let myMap = new Map();

console.log(typeof myMap);

let key1 = "Hakan";
let key2 = {a:1,b:2};
let key3 = () => 5;

//Set
myMap.set(key1,"String değer");
myMap.set(key2,5);
myMap.set(key3,"Arrow function");


//Get
console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));


//**************************************** */

let persons = new Map([
    ['Hakan', 35],
    ['Ahmet', 28],
    ['Pelin', 19]
  ]);


  // traverse

  //Keys
  for (let person of persons.keys()) {
    console.log(person);                      // Hakan, Ahmet, Pelin
  }
  
  // Values
  for (let age of persons.values()) {
    console.log(age); // 35, 28, 19
  }
  
  // Entries
  for (let entry of persons) { 
    console.log(entry);               // Hakan,35....
  }