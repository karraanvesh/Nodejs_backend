/**
 * Output : 
 * inside fun
 * leaving fun
 * after a halt of 3 seconds "completed assignments" will be printed 
 * 
 * Justification : When js encounters setTimeout in function fun() , now setTimeout is not 
 * natively known to the js (check the official doc) it will handover this task to runtime and starts the timer
 *  , so it will not wait for the task to be done . Instead
 * it executes the rest of the code .
 * Once the call stack is empty and global code is done . (condition to execute the runtime tasks this 
 * condition is checked by event loop (it is like a infinite loop))
 * it picks one task from evet queue and executes it , then another task and so on.
 */
function fun(task)
{
    console.log("inside fun");
    setTimeout(function todo(){
        console.log("completed" , task);
    } , 3000);

    for(let i = 0 ; i < 10000000000;i++){
        // some imp
    }

    console.log("leaving fun");
}

fun("assignments");