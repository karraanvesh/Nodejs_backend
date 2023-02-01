function fetchCustom(val){
    return new Promise(function processDownloading(resolve , reject){
        console.log("started downloading");
        setTimeout(function process(){
            console.log("inside process");

            if(val%2 == 0)
            resolve("Even");

            reject("Odd")
        });
    });
}

let x = fetchCustom(19);
console.log(x);