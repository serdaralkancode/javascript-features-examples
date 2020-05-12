const arr = ["A","B","C","D"];

console.log(...arr);

const arr2 = [...arr,"E","F"];

console.log(...arr2);

arr2.push("G")

console.log(...arr2);

//---------------------------

function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));

  //or
  
  console.log(sum.apply(null, numbers));