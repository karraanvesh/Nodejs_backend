/**
 * The output produced by the console.log of exec function is completed dayananda
 * Closures doesn't the value , it remembers the variable so even if we change the value of that variable
 * it will be reflected in the output ( here we are going to remember the variable task but not it's value)
 */
function todo(task) {
    console.log("inside todo");
    setTimeout(function exec(){
        console.log("completed" , task);
    } , 3000);

    task = "dayananda";

    console.log("leaving todo");
}

console.log("start");
todo("assignments");
console.log("end");