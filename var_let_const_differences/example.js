// ************* var vs let *************


//var  : function scoped
var a = 10;
console.log(a);

var a = 20;        // declared same name again. -> no error
console.log(a);


//let : block scoped
let b = 10;
console.log(b);

//let b = 30;      // ERROR -> Can not declared b again.    
//console.log(b);

let c;
c= 10;             // NO ERROR
console.log(c);

c= 20;             //NO ERROR
console.log(c);

// access window object
console.log(a);  
console.log(b);    // undefined

//block

for(let i=0;i<5;i++){

    console.log("i :" + i);
}

//console.log(i);       // undefined

for(var x=0;x<5;x++){

    console.log("x :" + x);
}

console.log(x);       // x: 10;

//----------------------------------------------------

const c1 = 10;
//c1 = 20             // ERROR

//const c2;
//c2 = 10             // ERROR

const c3 =  [1,2,3,4];
//c3 = [1,2,3,4,5]    //ERROR   

const c4 = [1,2,3,4];
c4.push(5);           // NO ERROR

const c5 = 10;
v = c5;
v = 20;

console.log(c5);      // 10
console.log(v);       // 20

//------------------------------------------

if(true)
{
    var v1 = 10
    let l1 = 20
    const c6 = 30
}

 console.log(v1)        // 10
// console.log(b)       // ERROR
// console.log(c6)      // ERROR

var val1 = 10;
let val2 = 20;
const val3 = 30;

if(true)
{
    var val1 = 40;
    let val2 = 50;
    const val3 = 60;

    console.log(val1,val2,val3);     // 40 50 60
}

console.log(val1,val2,val3);        // 40 20 30   



