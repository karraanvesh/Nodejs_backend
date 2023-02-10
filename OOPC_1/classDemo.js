class Product{
    // even we can define the data members outsude the constructor
    discount = 10;
    constructor(n , p){
        this.name = n;
        this.price = p;
    }

    // member functions
    // to define the member functions we need not to use function keyword
    // we can define directly using the function name

    diplayDetails(){

    }

    buyProduct(){

    }
}
/**
 * Overhere , we came across 2 new keywords new and this 
 * new and this keywords behaviour is very different when compared to the languages like cpp and java
 * overthere , new is used to create an instance or object and this is used to represent the current instance or object
 * But here the behaviour of new and this is absolutely different and which will open plenty of new things infront of us
 * Rules for this keyword :
 * -> In js this represents to the calling site
 * In order to understand this first we need to understand new keyword
 * 1. whenever we write new classname(argument list) it actually creates a empty object {}
 * 2. It does some linking we will discuss later in the inheritance part
 * 3. Then it assigns a name of this to that empty object {} which we have prepared when we have invoked the constrcutor
 * now , the name of the empty object {} is this
 * 4. Now , in the Product class when we say this.property it actually represents the object we have prepared over the calling site
 * i.e., this.name = n => {}.name = n => which will eventually adds an key value pair in the {} object
 * this.name = n => {name : "iphone 11"}
 * this.price = p => {name : "iphone 11" , price : 500000};
 * and at last it returns that object
 * which will be store in the varible from which we have made an call in this case iphone and macbook stores the returned object
 */

let iphone = new Product("iphone 11" , 500000);
console.log(iphone);
let macbook = new Product("Macbook air" , 1000000); 
console.log(macbook);

