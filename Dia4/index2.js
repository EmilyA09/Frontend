// fucntion javascript
function greet(name){
    console.log("Hello, " + name + "!");
}



/// function parameters and return values
function add(a,b){
    return a+b;
}
let sum = add(5,10);
console.log(sum);

// array loop
let fruit = ["apple", "banana", "cherry"];

fruit.push("orange");
for (let i=0; i< fruit.length; i++){
    console.log(fruit[i]);
}

// array while loop
let fruits = ["apple", "banana", "cherry"];

let i=0;
while (i < fruits.length){
    console.log(fruits[i]);
    i++;
}

