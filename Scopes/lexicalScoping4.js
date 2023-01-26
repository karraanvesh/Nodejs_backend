var teacher = "Sanket"; // global scope

function fun()  // global scope
{
    console.log(subject); // it is available throughout the function fun() but we haven't assigned any value . Hence prints undefined
    var teacher = "Pulkit"; // scope of fun()
    var subject = "Javascript"; // scope of fun()
    teachingAssistant = "vibhav"; // creates an auto global and assigns the value "vibhav" to teachingAssistant
    console.log(teacher); // checks for teacher in the scope of fun() , yes it is present so prints Pulkit
    console.log(teachingAssistant); // checks for teachingAssistant , it is auto global now , so prints vibhav
}

fun();
console.log(teacher); // prints Sanket
console.log(teachingAssistant); // prints vibhav auto global