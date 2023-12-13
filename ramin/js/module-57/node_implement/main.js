
//////   How to use the first way

let random = require("./randomUtils");
let isnil = require("./isNil");

let display1 = random.getNRandomNumbers(5,10,20);
console.log(display1); 

let display2 = random.getNRandomNumberss(5);
console.log(display2);

console.log(isnil("test"));
