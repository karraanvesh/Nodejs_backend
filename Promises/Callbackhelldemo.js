/**
 * Task 
 * write a function to download the data from the source url
 * write a function to write the downloaded data to the new file
 * write a function to upload the file to the newurl from the previous step
 */

function fetchCustom(url , fn){
    console.log("started downloading");
    setTimeout(function process(){
        console.log("completed downloading from " , url);
        let response = "Dummy data";
        fn(response);
    }, 3000);
    console.log("ending downloading");
}

function writeFile(data , fn){
    console.log("started writing into file");
    setTimeout(function process(){
        console.log("completed writing into file");
        let file_name = "task.txt";
        fn(file_name);
    } , 2000);
    console.log("ending writing");
}

function uploadFile(newurl , file_name , fn){
    console.log("started uploading file");
    setTimeout(function process(){
        console.log("completed uploading");
        let url = newurl;
        fn(url);
    } , 3000);
    console.log("ending uploading");
}

fetchCustom("www.google.com" , function exec(response){
    console.log("downloaded data is " , response);
    writeFile(response , function exec1(file_name){
        console.log("file name is " , file_name);
        uploadFile("www.booking.com" , file_name , function exec2(newurl){
            console.log("uploaded to" , newurl);
        });
    });
});