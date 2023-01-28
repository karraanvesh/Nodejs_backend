/**
 * Closures is noting but the function remembers it's lexical scoping , even after the function is executed and
 * removed from callstack.
 * Here the callback function exec() remembers the task variable even the after the todo function is executed
 * The variables which are required to be used later , will persist in the memory . Hence we can able to access the task varibale
 * with this mechanism
 */
function todo(task) {
    console.log("inside todo");
    setTimeout(function exec(){
        console.log("completed" , task);
    } , 3000);

    console.log("leaving todo");
}

console.log("start");
todo("assignments");
console.log("end");