import { hello, helloName } from './display.js';
import { sum , difference, product, qoutient, } from './compute.js';

hello();
helloName('Abi');

console.log("The sum is", sum(1,2));
console.log("The difference is", difference (18,11));
console.log("The product is", product(50,2));
console.log("The qoutient is", qoutient(15,3));