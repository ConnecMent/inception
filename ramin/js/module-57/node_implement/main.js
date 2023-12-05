
//////   How to use the first way

let random = require("./randomUtils");
let nill = require("./isNil");

let display1 = random.getNRandomNumbers(5,10,20);
console.log(display1); 

let display2 = random.getNRandomNumberss(5);
console.log(display2);

let display3 = nill.isNil("test");
console.log(display3);
