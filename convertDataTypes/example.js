// convert String

let v1 = 123;

v1 = String(v1);

console.log(typeof v1);  // string

let v2 = 4445;

v2 = v2.toString();

console.log(typeof v2); // string


// convert Number

var a = "123";

n1 = Number(a);

console.log(typeof n1);  // number

var a2 = "123";

n2 = parseInt(a2);

console.log(typeof n2);  // number

Number(" ");    // returns 0
Number("");     // returns 0

Number("one");   // returns NaN
Number("10,000");   // returns NaN
Number("1 4");      // returns NaN
Number("11-11-11"); // returns NaN

Number(false);      // returns 0
Number(true);       // returns 1


// convert Boolean

Boolean(0);         // returns false
Boolean("");        // returns false
Boolean(undefined); // returns false
Boolean(NaN);       // returns false
Boolean(null);      // returns false
Boolean(5);         // returns true
Boolean(" ");       // returns true
Boolean("Hello");   // returns true
Boolean("0");   // returns true