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
console.log("ending");