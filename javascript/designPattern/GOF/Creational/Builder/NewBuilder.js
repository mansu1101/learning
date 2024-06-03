class Pizza {
  constructor(size, crust, toppings, cheese) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings || []; // Default to empty array
    this.cheese = cheese;
  }

  getSize() {
    return this.size;
  }

  getCrust() {
    return this.crust;
  }

  getToppings() {
    return this.toppings;
  }

  getCheese() {
    return this.cheese;
  }
}


class PizzaBuilder {
  constructor(size) {
    this.size = size;
    this.crust = null;
    this.toppings = [];
    this.cheese = null;
  }

  setCrust(crust) {
    this.crust = crust;
    return this; // Allow method chaining
  }

  setToppings(toppings) {
    this.toppings = toppings;
    return this;
  }

  setCheese(cheese) {
    this.cheese = cheese;
    return this;
  }

  build() {
    return new Pizza(this.size, this.crust, this.toppings, this.cheese);
  }
}

// client call

const pizza = new PizzaBuilder(12) // Create a 12-inch pizza builder
  .setCrust('thin')
  .setToppings(['pepperoni', 'mushrooms'])
  .setCheese('mozzarella')
  .build(); // Build the final Pizza object

console.log(pizza.getSize());  // Output: 12
console.log(pizza.getCrust()); // Output: thin
console.log(pizza.getToppings()); // Output: ['pepperoni', 'mushrooms']
console.log(pizza.getCheese()); // Output: mozzarella


/**
 * Benefits of using Builder Pattern:

Improved Readability: 
    Code for creating complex objects becomes clearer and easier to understand.
Immutable Objects: 
    The Pizza class doesn't modify itself, promoting immutability.
Optional Parameters: 
    You can build pizzas with some attributes missing by using defaults.
Method Chaining: 
    The builder methods allow for a fluent API for creating pizzas.

This is a basic example. You can extend it further by:

Adding different types of crusts, toppings, and cheeses.
Validating user input for pizza attributes in the builder methods.
Creating separate builder subclasses for specific pizza types (e.g., VegetarianPizzaBuilder).
 */