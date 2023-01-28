/**
 * Here we are going to return the function b () from fun()
 * And we are consuming the returned function in variable x 
 * technically it is like let x = function b() {console.log(name);}
 * Now , inorder to execute b we use x(); 
 */
function fun(name){
    return function b() {
        console.log(name);
    }
}

let x = fun("sanket");
console.log(x);
x();