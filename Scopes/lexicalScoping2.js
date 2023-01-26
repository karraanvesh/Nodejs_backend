var teacher = "Sanket"; // global scope 


function fun() // global scope 
{
    // in the scope of fun() currently
    var teacher = "Pulkit"; // scope of fun()
    /*
        in the execution phase we will look for is there any variable called teachingAssistant in the scope  of fun()
        but we end up withuout finding it . So we look one scope outside i.e., global scope 
        Now , we will check whether there is any variable called teachingAssistant in the global scope
        but we will end up without finding it , and we are at the last scope we cannot go out of the global scope
        So , in this case js creates teachingAssistant globally , over here we assign it that is known as auto globla
        note : auto globals will be only created when we use the variable as target reference but not as source 
    */
    teachingAssistant = "vibhav"; 
    console.log(teacher); // prints Pulkit
    console.log(teachingAssistant); // prints vibhav
}

fun();
console.log(teacher); // Sanket
console.log(teachingAssistant); // vibhav auto global