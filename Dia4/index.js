// Javascript

const num1 = 2;
const num2 = 2;

let suma = num1 +num2;
let resta = num1 -num2;
let division = num1 / num2;
let multiplicacion = num1 * num2;

console.log ('El resultadode tu suma es:'+suma);
console.log ('El resultadode tu resta es:'+resta);
console.log ('El resultadode tu division es:'+division);
console.log ('El resultado tu multiplicacion es:'+multiplicacion);


//////
// If example
let age = 20;

if (age>=18){
    console.log("You are an adult");
}


//////
// If else example
let aGe = 5;

if (aGe>=18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}


//////
// Else if example
let Age = 18;

if (Age < 18){
console.log("You are a minor");
} else if (Age == 18) {
    console.log("You just became an adult");
} else {
console.log("You are an adult");
}



//Switch example
let day ="Friday";
switch (day){
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("End oof the week");
        break;
    default:
        console.log("Midweek");
}


// for Loops
for (let i=0; i < 5; i++){
    console.log(i); //Logs 0,1,2,3,4
}

// while Loops
let i=0;
while (i > 5){
    console.log(i);// Logs 0,1,2,3,4
    i++;
}

//do while Loops
let count = 0;
do{
console.log(count);
count++; //Increment the counter
} while (count < 5); 

// nested Loops
for(let i = 0; i < 3; i++){
    //Outer loop runs 3 times
    for(let j = 0; j < 60; j++){
        //Inner loop runs 60 times for each outer loop iteration
        console.log("Outer:" + i +", Inner: " + j);
    }
}