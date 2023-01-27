/*
    In order to implement the callbacks we use function expressions  and make a call from another function
    function expressions : It is the way where we pass a function as an argument to another function
*/

function fun(x , fn)
{
    /**
     * x -> value we are going to receive
     * fn is the callback function

     */

    // some imp

    
    for(let i = 0 ; i < x ; i++){
        console.log(i);
    }

    fn(); // calling callback
    
    // some logic
}

fun(10 , function logger(){

    // some task
    console.log("custom logger");
});