// using ` expression instead of '' or " "


let str = `Template Literal`;

console.log(str);

let multiLineStr = 'First Line String\nAnd Second Line String!';

console.log(multiLineStr);

let myMultiString2= `Hello My Name
is Serdar!`;

console.log(myMultiString2);

let name = `Serdar`;

console.log(`Hi my name is ${name}`);


let price = 29.99;
let tax = 2.33;

let total = `The total prices is ${price * tax}`;


// Nesting Template

const classes = `header ${ isLargeScreen() ? '' :
  `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;