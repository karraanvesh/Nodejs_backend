// A function is nothing but a function passed as an argument to another function that

function fun()
{
    console.log("inside fun");
}

function gun(fn)
{
    console.log("inside gun");
    fn();
    console.log("leaving gun");

    console.trace();
}

// one way of function expression
gun(function (){
    // this is an anonymous function i.e., function without any name
    // anonymous function are hard to debug since they don't have any name
    // recursive logics are hard to code 

    console.trace();
    console.log("new function passed");
});
