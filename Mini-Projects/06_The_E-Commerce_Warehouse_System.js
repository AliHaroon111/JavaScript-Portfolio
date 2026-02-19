// 1st Part
class Product{
    #price
    constructor(name,price,stock){
        this.name=name;
        this.price=price;
        this.stock=stock;
    }
    
    // getter
    get price(){
        return `$${this.#price}`
    }

    // Setter
    set price(value){

    }
    
    //method
    displayInfo(){ 
        console.log(`Product: ${this.name} Stock: ${this.stock}`)
    } 

    // 3rd Part-Static Method
    static compareStock(product1 , product2){
        if(product1.stock>product2.stock){
            console.log(`Product1 Stock was low ${product2.name}`)
        }else{
            console.log(`Product1 Stock was low ${product1.name}`)
            
        }
    }
}

const shirt = new Product("Cotton Shirt", 25, 100);
const laptop = new Product("Gaming Laptop", 1200, 50); // without this the belew line doesnt works

console.log(Product.compareStock(shirt, laptop))

// const Prod = new Product
// Prod.compareStock(shirt, laptop)


// 2nd Part
// Inherited Class
class Electronic extends Product{

    constructor(name,price,stock,warrantyperiod){
        super(name,price,stock)
        this.warrantyperiod=warrantyperiod
    }

    displayInfo(){ 
        console.log(`Product: ${this.name} Warrany: ${this.warrantyperiod}`)
     } 

}

