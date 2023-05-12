// in this we are going to talk more about super keyword

//The super keyword is used to access and call functions on an object's/class's parent.

//# SYNTAX

//super(argumentsOfParent);  // calls the parent constructor (only inside the constructor)
//super.parentMethod(arguments);  // calls a parent method //# mostly people call the parent properties outside the class using a variable or constant just like i did using deepak below but  if you want to add parent function in child class then you can use this 
//? maybe when you will do big projects this will be very commonly used..


//? rule
// When used in a constructor, the super keyword appears alone and must be used before the this keyword is used. The super keyword can also be used to call functions on a parent object.

// ====EXAMPLE 1====

class Rectangle {
  constructor(height, width) {
    //parameters we require in this class
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log("Hi, I am a ", this.name + ".");
  }
  getArea() {
    return this.height * this.width;
  }
  inCentimeters(){
      return this.height + " cm"
  }
}

  class Square extends Rectangle {
      //! yha hmare child ka constructor user se legth lega or super only length lega parent sab lena compulsory nhi h
    constructor(height, length) { //you can add your argument and side by side can use the parent argument
     // this.height; //# ReferenceError, super needs to be called first! than this keyword

      // Here, it calls the parent class's constructor with lengths
      // provided for the Rectangle's width and height from parent
      super(height);

      // Note: In derived classes, super() must be called before you
      // can use 'this'. Leaving this out will cause a reference error.
      this.name = 'Square';
      this.length = length;

    }
    getInfo() {
        return this.length*this.height;
    }

  }
const sam = new Rectangle(11, 12);
console.log(sam.getArea());

const deepak = new Square(7, 8); //you can use the argument which you need there is no compulsation to use all the parent argument and you can add your argument also
console.log(deepak.getInfo());
console.log(deepak.inCentimeters()); //you can use the parent functions

