
// this object
//Example
const obj1 = {
    number1: 10,
    number2: 20,
  }
  const obj2 = {
    number1: 30,
    number2: 50,
  }
  function addNumbers(num){
    console.log(this.number1 + this.number2 + num );        // this -> Window object
  }                                                         // Windows object has not number1 and number2
  addNumbers(100);      // NaN


  //****************************************************** */

  //call function

  const obj1 = {
    number1:10,
    number2:20
  }
  const obj2 = {
    number1:30,
    number2:50
  }
  
  function addNumbers(num) {
    console.log(this.number1 + this.number2 + num);     // 
  
  }
  
  addNumbers.call(obj1,100);     // call -> this -> obj1's props (number1 and number2) -> 130
  addNumbers.call(obj2,100);     // call -> this -> obj2's props (number1 and number2) -> 180


  //************************************************************ */

  //apply function

  const obj3 = {
    number1:10,
    number2:20
  }
  const obj4 = {
    number1:30,
    number2:50
  }
  
  function sumNumbers(num) {
    console.log(this.number1 + this.number2 + num);
  
  }
  
  sumNumbers.apply(obj3,[100]);     // appy -> Process parameters as list
  sumNumbers.apply(obj4,[100]);     // call and apply is same. 
                                    // call -> each one  
                                    // apply -> list


//***************************************************************** */

// bind function

const obj5 = {
    number1:10,
    number2:20
  };
  
  function getNumbersTotal(number3,number4) {
    return this.number1 + this.number2 + number3 + number4;
  }
  
  const copyFunc = getNumbersTotal.bind(obj1);     // call,apply,bind is same
                                                   // call and apply run function immediately
  console.log(copyFunc(30,40));                    // bind create copy function and this function is used later, where you want



  // bind Example2

  let user = {
    presentation: "Welcome"
  };

  function helloFunc(name) {

    console.log(this.presentation + " " + name);
  }

  let helloUser = helloFunc.bind(user);

  helloUser("Serdar");