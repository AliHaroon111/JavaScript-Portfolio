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
        if(value<0){
            console.error("Error: Price cannot be negative!");
        }else{
            this.#price=value
        }
    }
    
    //method
    displayInfo(){ 
        return `Product: ${this.name}, Stock: ${this.stock}`;
    } 

    // 3rd Part-Static Method
    static compareStock(product1 , product2){
        if(product1.stock>product2.stock){
            return product1.name;
        }else if(product1.stock<product2.stock){
            return product2.name;   
        }else{
            return `Both are equal`
        }
    }
}


// 2nd Part
// Inherited Class
class Electronic extends Product{

    constructor(name,price,stock,warrantyperiod){
        super(name,price,stock)
        this.warrantyperiod=warrantyperiod
    }

    displayInfo(){ 
        return `${super.displayInfo()} and Warranty ${this.warrantyperiod} years` // Here remove paranthesis and see what happens
    } 

}

// Create a product 
const shirt = new Product("Cotton Shirt", 25, 100);

// Create a Electronic 
const laptop = new Electronic("Laptop", 150000, 5, 2)


// 3. Try to set negative price
console.log("--- Testing Negative Price ---");
laptop.price = 100; // Should trigger error logic ----> Check here for negative values


// 4. Call displayInfo on both
console.log("-Displaying Info-\n");
console.log(shirt.displayInfo());
console.log(laptop.displayInfo());

console.log("Stock Comparison")
const winner = Product.compareStock(shirt, laptop)
console.log(`The Prdouct with more stock ${winner} is the winner `)