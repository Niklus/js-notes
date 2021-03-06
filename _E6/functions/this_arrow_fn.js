/*this Recap*/ 

/*
1. A new object
If the function is called with new:

const mySundae = new Sundae('Chocolate', ['Sprinkles', 'Hot Fudge']);

In the code above, the value of this inside the Sundae constructor 
function is a new object because it was called with new.

2. A specified object
If the function is invoked with call/apply:

const result = obj1.printName.call(obj2);
In the code above, the value of this inside printName() will 
refer to obj2 since the first parameter of call() is to explicitly set what this refers to.

3. A context object
If the function is a method of an object:

data.teleport();
In the code above, the value of this inside teleport() will refer to data.

4. The global object or undefined
If the function is called with no context:

teleport();
In the code above, the value of this inside teleport() is either the global object or, if in strict mode, it's undefined.


*/

/*

With regular functions, the value of this is set based on how the function is called. With arrow functions, 
the value of this is based on the function's surrounding context. In other words, the value of this inside
an arrow function is the same as the value of this outside the function.

*/

// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  
  // arrow functions inherit their this value from their surrounding context. 
  setTimeout(() => { //coz of arrow fn this will not point to setTimeout obj but Icecream 
    this.scoops++;         
    console.log('scoop added!');
    console.log(dessert.scoops);
  }, 500);
};

const dessert = new IceCream();
dessert.addScoop();
