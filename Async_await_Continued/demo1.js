function fun(){
    return new Promise(function f(resolve , reject){
        setTimeout(function process(){
            console.log("Resolved");
            resolve(123);
        } , 5000);
    });
}

let x = fun();
x.then(function a(value){
    console.log("value is" , value);
});

x.then(function b(value){
    console.log("yo the value is", value);
});