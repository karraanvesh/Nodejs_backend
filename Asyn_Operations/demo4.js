function fun(task1 , task2){
    console.log("inside fun");
    setTimeout(function exec(){
        console.log("executed " , task1);
    } , 3000);
    setTimeout(function exec1(){
        console.log("executed" , task2)
    } , 5000);

    console.log("leaving fun");
}

fun("cpp" , "c");
console.log("ending");