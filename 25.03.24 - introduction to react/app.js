// named import
import { x, y } from "./script.js";
import * as abc from "./script.js";

// default import
import varun from "./script.js"

console.log("This is app.js file");

// console.log(abc, abc.x);
console.log(abc); // Module object
console.log(x);
console.log(y);

// default import print
console.log(varun);
console.log(abc.default);