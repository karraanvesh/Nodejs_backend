console.log("Starting of the file");

setTimeout(function Timer1(){
    console.log("Timer 1 is done");
} , 0);

for(let i = 0 ; i < 10000000000 ; i++){
    // some imp
}

let x = Promise.resolve("Sanket's promise");
x.then(function processPromise(value){
    console.log("whose's promise ?" , value);
});

setTimeout(function Timer2(){
    console.log("Timer 2 is done");
},0);

console.log("end of the file");