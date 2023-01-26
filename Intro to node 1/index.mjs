console.log("Start");

// let searching = require("./Searching.js");

import searching from "./Searching.js"

// module is one of the globals which has several properties
// console.log(module);

let arr = [1 , 2 , 3 , 4 , 6 , 7 , 8];
let x = 6;

console.log(searching.binary(arr , x));
