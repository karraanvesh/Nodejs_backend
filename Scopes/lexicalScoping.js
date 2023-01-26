var teacher = "Sanket"; // global scope

// global scope
function fun() {
    var teacher = "Pulkit"; // scope of fun()
    console.log(teacher); // cheks for teacher variable in the scope of fun() , yes we found it so it prints Pulkit
}

fun();
console.log(teacher); // checks for scope of teacher in the global scope , yes we found it so prints "Sanket"