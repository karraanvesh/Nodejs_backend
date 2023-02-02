function dummyPromise(){
    return new Promise(function f(resolve , reject){
        setTimeout(function (){
            resolve("Timer's Promise");
        },10000);
        
    });
}

console.log("start of the file");

setTimeout(function timer1(){
    console.log("Timer 1 is done");
    let y = dummyPromise();
    y.then(function processPromise(value){
        console.log("whose Promise ?" , value);
    });
} , 0);

let x = Promise.resolve("Sanket's Promise");
x.then(function processPromise(value){
    console.log("whose promise ?" , value);
})

setTimeout(function timer2(){
    console.log("Timer 2 is done");
} , 0);

console.log("end of the file");