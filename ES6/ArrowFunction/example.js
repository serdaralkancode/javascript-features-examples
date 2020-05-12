const hello = () => {

    console.log("Hello");
}

hello();

const hello2 = (name,surname) => {

    console.log("Hello",name,surname);
}

hello2("Serdar","Alkan");


const hello3 = isim => {

    console.log("Hello",isim);
}

hello3("Serdar");


const cubeFunc = x => x*x*x;

console.log(cubeFunc(4));