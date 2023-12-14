/////////  How to use the seccond way

import {getNRandomNumberss,getNRandomNumbers} from "./randomUtils.js";
import isNil from "./isNil.js";

let display1 = getNRandomNumbers(5,10,20);
console.log(display1);

let display2 =getNRandomNumberss(5);
console.log(display2);

let display3 = isNil("test");
console.log(display3);
