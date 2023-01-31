/**
 * The main disadvantages of callbaks are :
 * callback hell
 * Inversion of control
 * 
 * what is inversion of control ?
 * In the program we have defined a function fun() , let us assume that the function fun() is an
 * internal function just like sqrt() , abs() etc.. , some third party had defined this and we are
 * using it and we are passing a callback ( the logic we have implemented) to function fun() 
 * and completely we are giving the access of out code to them
 * Now , we don't know when they are going to call this callback process()
 * they may call twice , thrice , or don't even call it
 * Let us just say fun() is an booking application in that case
 * the person if he want to reserve a table , 2 or 3 bookings can happen
 * or they don't even call then even though he books no reservation will be done
 * 
 * Here , we are giving access of our code to completely others and completely trusting them
 * i.e., we are not able to have control over our own code this is called inversion of control
 */
function fun(inputString , fn){
    var result = inputString.split(",");

    let n = result.length;
    for(let i = 0 ; i < n ; i++){
        fn(result[i]);
    }
}

fun("name:Anvesh,subject:cse", function process(str){
    var res = str.split(":");
    console.log(res[0] ,  "=>" , res[1]);
})