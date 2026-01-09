console.log("Hello World");
console.log("how to write message");

//OLD
var name = "Abi";
console.log(name);
console.log("Name:", name);
console.log("Name: " + name);

//NEW
let fname = "Abi";
fname = "Abigail";
const lname = "Ola";
console.log("My name is " + fname + " " + lname);

//varibles no.
const first = 20;
const second = 50;
const sum = first + second;
const difference = second - first;
const product = first * second;
const quotient = first / second;
console.log("The sum is", sum);
console.log("The difference is", +  difference);
console.log("The product is", +  product);
console.log("The quotient is", +  quotient);

//loops
for(let a = 0; a<5; a++) {
    console.log(a);
}

let counter = 10;
while (counter > 0) {
    console.log(counter);
    counter--;
}

const student = ["Rix", "Arvin", "Ced"];
student.forEach((s) => {
    console.log("Hello ", s);
});

const age = 18;
if(age >= 18) {
    console.log("You are legal age");
}

else{
    console.log("You are minor");
}


const ages = [18, 10, 20, 9, 100];
ages.forEach((r) => {
    if( r >= 18 ){
        console.log(r + " is legal age.");
    }else{
        console.log(r + " is minor.");
    }

});


