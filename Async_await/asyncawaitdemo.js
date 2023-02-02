/**
 * Task 
 * write a function to download the data from the source url
 * write a function to write the downloaded data to the new file
 * write a function to upload the file to the newurl from the previous step
 */

function fetchData(url){
    return new Promise(function processDownloading(resolve , reject){
        console.log("started downloading from " , url);
        setTimeout(function process(){
            console.log("completed download");
            let data = "Dummy data";

            resolve (data);
        },7000);
    });
}

function writeFile(data){
    return new Promise(function processWriting(resolve , reject){
        console.log("started writing");
        setTimeout(function process(){
            console.log("completed writing");
            let filename = "result.txt";

            resolve(filename);
        },4000);
    });
}

function uploadFile(filename , newurl){
    return new Promise(function processUploading(resolve , reject){
        console.log("started uploading");
        setTimeout(function process(){
            console.log("uploaded" , filename , "to",newurl);
            let result = "SUCCESS";

            resolve(result);
        } , 3000);
    });
}

async function processing(){
    let downloadData = await fetchData("www.google.com");
    console.log("downloaded data is " , downloadData);
    let filename = await writeFile(downloadData);
    console.log("wriiten data in" , filename);
    let uploadResponse = await uploadFile(filename , "www.google.drive.com");
    console.log("uploading await completed");
    console.log("Completed process with response: ", uploadResponse);

    return true;
}

console.log("Start")
processing();
console.log("End");