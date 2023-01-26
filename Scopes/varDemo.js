function fun()
{
    console.log(x); // why we get undefined ? lexical scoping since we didn't intialise anything
    var x = 10; // scope of fun and accessible throughout the function fun
    console.log(x); // gives 10
}

{
    var y = 8; // becomes global due to var
}

console.log(y); // prints 8

if(true) {
    var z = 30; // becomes global due to var
}

if(false)
{
    var a = 20; // becomes global due to var
}

console.log(z); // prints 30
console.log(a); // undefined 
fun();