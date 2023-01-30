/**
 * Output :
 * inside fun
 * it takes till the for loop to end and after some time
 * it prints leaving fun
 * 
 * Justification : Javascript is a single threaded and synchronus in nature ( it executes the code
 * line by line and if it encounters anything which is natively known to the js , it waits until the task
 * to be completed and then it executed the rest of the portion of code)
 */
function fun()
{
    console.log("inside fun");
    
    // time consuming task which is natively known to the js 
    // so it waits until the loop to be ended and then only
    // the rest of the code will be executed
    for(let i = 0 ; i < 10000000000 ; i++){
        // some imp
    }

    
    console.log("leaving fun");
}
fun();