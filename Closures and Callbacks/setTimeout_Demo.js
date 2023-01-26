/**
 * setTimeout : It is a function which expects two arguments 
 * i.e., 1 .task to be executed , 2 . time in milliseconds and it executes the task only one 
 * once the time is done
 */

// setTimeout retruns a unique id , using that id we can stop executing that task
let x = setTimeout(function process(){
    console.log("task executed");
} , 10000);

let y = setTimeout(function process(){
    console.log("task executed 2");

    clearTimeout(x); // it is used to stop executing some task , if it is not required to be executed
} , 5000);