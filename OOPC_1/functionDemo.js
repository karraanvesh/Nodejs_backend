function Product(n , p){
    this.name = n;
    this.price = p;

    // member functions

    // we can even assign the function to an objects and call it using the object we have created during the calling site
    this.display = function (){
        console.log(this.name , this.price);
    }

    this.buyProduct = () => {
        console.log("Thanks for buying the product");
    }

    return {name : "anvesh" , age : 21};
}

/**
 * Overhere , we can see that we can able to get the object in the same way as class
 * In general , js doesn't have any oopc concepts from the very beginning 
 * Everything can be implemented using functions only , classes are just the wrapper over the functions
 * Irrespective of the fact we are calling a function or costructor of a function the behaviour of the this and new keyowrd will be same
 * i.e., this is going to represent the object we have prepared during the calling side
 * new will create an empty instance
 * In the function when we are going to use this => it actually represents the object to the calling site
 */

/**
 * Note : In the function Product we are actually not returning anything , but the object is getting stored in the iphone 
 * variable , how this is gonna happen ?
 * If we don't return anything from function and this function is invoked using new keyword , then it automatically it 
 * returns the this , Either we return this or not it optional 
 * But , it we are manually returning another object like {name : "anvesh" , age : 21} then this object will be stored 
 * in the iphone variable
 */

let iphone = new Product("iphone 11" , 500000);
console.log(iphone);
// iphone.display(); // calling the functions using the objects
// iphone.buyProduct();