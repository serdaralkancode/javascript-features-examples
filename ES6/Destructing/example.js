// Previous Approach
let n1,n2;

arr = [1,2,3,4];

n1 = arr[0];
n2 = arr[1];

console.log(n1,n2);

/********************************** */

//Destructing
let n3,n4
arr2 = [1,2,3,4];

[n3,n4] = arr2;

console.log(n3,n4);

// or

const [v1,v2] = arr2;
let [v3,v4] = arr2;

console.log(v1,v2);
console.log(v3,v4);

//----------------------------

const degerler =
{
    a:1,
    b:2,
    c:3,
    d:4,
    e:5
}

const {a:n7,c:n8,e:n9} = degerler;

console.log(n7,n8,n9);

//------------------------------

const getlang = () => ["Turkish","English","Spanish"];

const [l1,l2,l3] = getlang();

console.log(l1,l2,l3);

//------------------------------

const person = {

    name:"Serdar",
    salary : 1000,
    infos : () => console.log("person information...")

}

const {name:name1,salary:salary1,infos:infos1} = person;

console.log(name1,salary1);

infos1();


