/**
 * Output :
 * start 
 * end
 * 0
 * 1
 * 2
 * Justification : here in the for loop we have declared i as let i.e., it gets block scope
 * so it effects value of i , in every blocl
 */
function fun()
{
    console.log("start");
    for(let i = 0 ; i < 3 ; i++){
        setTimeout(function exec()
        {
            console.log(i);
        } , 2000);
    }
    console.log("end");
}

fun();