// for loop

const arr =["Ahmet", "Mehmet", "Selin"];

for(let i=0; i<arr.length; i++){
    console.log(i, "--", arr[i]);
}


// for .. in loop

const arr2 =["Comment1", "Comment2", "Comment3"];


for(let prop in arr2){
    console.log(prop, "--", arr2[prop]);
}

// for .. of loop

const langs =["Java", "C#", "C++","PHP"];
for(let lang of langs){
	console.log(lang);
}

// foreach

const arr3 =["Comment1", "Comment2", "Comment3"];
arr3.forEach(function(value,key){
	console.log(value, "--", key);
})

// map

const arr4 =["Comment1", "Comment2", "Comment3"];
arr4.map(function(c){
	console.log(c);
});

// for in with object

const person = {
	name:"Serdar",
	surname:"ALKAN",
    job:"Software Developer",
    department:"IT"
};
for(let key in person){
	if(person.hasOwnProperty(key)){
    	console.log(key, "--", person[key]);
	}
}


// for of with object  => Not traverse -> ERROR

// for(let prop of person){        -> ERROR
// 	console.log(prop);
// }

for(let key of Object.keys(person)){            // for .. of  -> NO ERROR
	console.log(key, "--", person[key]);
};


// foreach with object   => Not traverse -> ERROR

// person.forEach(function(value,key){    -> ERROR
// 	console.log(value, "--", key);
// })

Object.keys(person).forEach(function(key){      // foreach   -> NO ERROR
	console.log(key, "--", person[key]);
});

Object.entries(person).forEach(entry => {       // foreach   -> NO ERROR
	console.log(entry[0], "--", entry[1]);
});

Object.values(person).forEach(value => {        // foreach   -> NO ERROR
	console.log(value);
});

Object.getOwnPropertyNames(person).forEach( key => {   // foreach   -> NO ERROR
	console.log(key, "--", person[key]);
});


// map with object traverse    -> ERROR

// person.map(function(lang){  -> ERROR
// 	console.log(lang);
// });