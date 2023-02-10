// we can even prepare our own object like this , but make sure you have comma after
// every individual element in the object

const obj = {
    name : "Anvesh" ,
    age : 21 ,
    display : () => {
        console.log(this); // over here , the entire object will be printed 
    } , 
    display1 : function f(){
        console.log(this); // here , the empty object gets printed 
        // so the theory around oops using functions fails with arrow functions 
    }

};

console.log(obj);
obj.display();