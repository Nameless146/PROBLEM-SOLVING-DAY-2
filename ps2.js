//1. ES6 Destructuring
//Problem: You have an object representing a person. Use ES6 destructuring to extract the name and age properties.

//ANSWER FOR PROBLEM NO.1

const person = {
    name: "John Doe",
    age: 30,
  };
  
  const { name, age } = person;
  
  console.log(name) 
  console.log( age)   

  //PROBLEM SOLVED

  //3. ES6 Classes
  //Problem: Create a class Rectangle with properties width and height and a method to calculate the area.
  

  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  // Example usage
  const rect = new Rectangle(5, 10);
  const area = rect.calculateArea();
  console.log("Area of the rectangle:", area);
  
//PROBLEM SOLVED



//5. Class Expressions
//Problem: Create a class expression for a Circle with a method to calculate the circumference.


const Circle = class {
  constructor(radius) {
    this.radius = radius;
  }

  calculateCircumference() {
    const pi = Math.PI;
    return 2 * pi * this.radius;
  }
};

// Example usage
const circle = new Circle(5);
const circumference = circle.calculateCircumference();
console.log("Circumference of the circle:", circumference);


//7. Inheritance
//Problem: Create a base class Animal and a derived class Dog that inherits from Animal.


class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); 
    this.breed = breed;
  }

  makeSound() {
    console.log("Woof!"); 
  }
}

// Example usage
const dog = new Dog("Fido", "Labrador");
console.log("Dog's name:", dog.name); 
console.log("Dog's breed:", dog.breed); 
dog.makeSound();

const animal = new Animal("Generic Animal");
animal.makeSound(); 


//9. Static Methods
//Problem: Create a class MathUtil with a static method square to calculate the square of a number.


class MathUtil {
  static square(number) {
    if (typeof number !== 'number') {
      throw new TypeError('Input must be a number');
    }
    return number * number;
  }
}

// Example usage
const result = MathUtil.square(5);
console.log("Square of 5:", result); // Output: Square of 5: 25

try {
  MathUtil.square("hello"); // This will throw a TypeError
} catch (error) {
  console.error("Error:", error.message); // Output: Error: Input must be a number
}


//4. Getter and Setter in ES6
//Problem: Create a class Person with a getter and setter for the fullName property.

class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  set fullName(name) {
    if (!name || typeof name !== 'string') {
      throw new TypeError('fullName must be a string'); // Validate input type
    }

    const parts = name.trim().split(' '); // Trim whitespaces and split

    // Handle missing name parts gracefully
    this._firstName = parts[0] || "";
    this._lastName = parts[1] || "";
  }
}

// Example usage
const Person = new Person("John", "Doe");
console.log("Full name (getter):", person.fullName); // Output: John Doe

person.fullName = "Jane Smith";
console.log("Full name after setter:", person.fullName); // Output: Jane Smith

try {
  person.fullName = ""; // Test with an empty string (handled gracefully)
} catch (error) {
  console.error("Error:", error.message); // Won't throw an error here
}

try {
  person.fullName = 123; // Test with invalid input (will throw an error)
} catch (error) {
  console.error("Error:", error.message); // Handle the error
}




//BAKI GULA KORTE PARI NAI