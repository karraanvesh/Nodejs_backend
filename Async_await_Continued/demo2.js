async function fun(){
    console.log("entering");

    let x = await Promise.resolve(20);

    console.log("exiting");

    return x;
}

console.log("start");
let val = fun();
val.then(function f(value){
    console.log("value is ", value);
});

console.log("end");