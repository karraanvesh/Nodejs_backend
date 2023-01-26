/**
 * setInterval : It is a function which expects two arguments 
 * i.e., 1 .task to be executed , 2 . Interval in milliseconds and it executes the task again and again 
 * once the Interval is done
 */

// setInterval retruns a unique id , using that id we can stop executing that task
let x = setInterval(function executed() {
    console.log("mail sent again");
} , 2000);

let y = setInterval(function exec(){
    console.log("keep on executing");

    clearInterval(x , 7000); // it is used to stop executing some task , if it is no longer needed
} , 8000);
