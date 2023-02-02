function fetchData(url){
    return new Promise(function process(resolve , reject){
        console.log("started downloading from" , url);
        setTimeout(function processDownloading(){
            let data = "Dummy data";
            console.log("download completed");
            resolve(data);
        } , 7000);
    });
}

console.log("start");
let promiseObj = fetchData("www.google.com");
promiseObj
.then(function A(value){
    console.log("value is ", value);
});

console.log("end");