/**
 * Output :
 * start 
 * end
 * 3
 * 3
 * 3
 * Justification : here in the for loop we have declared i as var i.e., it gets scope of function fun and acdessible anywhere in function fun
 * even though the for loop runs and i gets incremented , it doesn't effect i in the output since it has scope of function fun()
 */
function fun()
{
    console.log("start");
    for(var i = 0 ; i < 3 ; i++){
        setTimeout(function exec()
        {
            console.log(i);
        } , 2000);
    }
    console.log("end");
}

fun();