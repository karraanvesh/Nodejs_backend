var teacher = "Sanket"; // global scope

function fun()  // global scope
{
    // inside the scope of fun()
    var teacher = "Pulkit"; // in the scope of fun
    teachingAssistant = "vibhav";
    console.log(teacher);
    console.log(teachingAssistant);
}

/*
    checks for teachingAssistant in the global scope and we end up without finding it
    and here we are going to use the variable as a source so it will give reference error
    Note : auto globals will be only created when we use them as target variables but not as a source 
*/
console.log(teachingAssistant); 
fun();
console.log(teacher);