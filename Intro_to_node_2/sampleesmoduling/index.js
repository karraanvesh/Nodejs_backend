console.log("Start");

import searching , {linearSearch , fun} from "./SearchingAlgo.js";

// let searching = require("./SearchingAlgo.js");

let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ];

let x = 8;

console.log(searching);
console.log(searching(arr , x));
console.log(linearSearch(arr , x));
console.log(fun());

// you can only have one default export , but multiple named exports


