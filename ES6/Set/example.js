let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(3); // NOT ADD BUT NO ERROR


let mySet2 = new Set();

let a = { name: "Ahmet" };
let k = { name: "Kamil" };
let c = { name: "Cihan" };

// visits, some users come multiple times
set.add(a);
set.add(k);
set.add(c);
set.add(a);   // IGNORE
set.add(c);   // IGNORE

for (let person of mySet2) {
    console.log(person.name);
  }

//******************************************* */  

//Example - Array unique

let arr = ["AAA", "BBB", "CCC", "DDD",
  "AAA", "CCC", "AA", "EEE", "AAA"
];

function arrUnique(arr) {
 
  return Array.from(new Set(arr));
};

console.log(arrUnique(arr));