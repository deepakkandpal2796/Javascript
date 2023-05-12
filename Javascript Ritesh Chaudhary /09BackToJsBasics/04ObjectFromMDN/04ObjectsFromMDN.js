//# ye hum isliye padh rhe hai taki agr kisi ke code me hme ye dikhe to hum use smj paaye.....agr you are not comfortable then you can not use this in your code...
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
//  check out static methods of the object:-
//# (1) object.assign() => The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.

//? (2) object.create() => The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
//lets take an example for Object.create()

var User = {
  name: "",
  getUserName: function () {
    console.log(`User name is ${this.name}`);
  },
};

var deepak = Object.create(User);
console.log(deepak);

//o/p => {}

//# reality came in front of you when we copy this code in console....we will get the proto and we can access the properties in the proto....and as the main source object is User, so all the properties of the User object can be seen in proto of deepak object......

//! so we can access the proto properties as we already know.

deepak.name = "Deepak";
deepak.getUserName();
//o/p => User name is Deepak;

//Now we have a new method where some people use constrctor

var sam = Object.create(User, {
  name: { value: "Sammy" },
  courseCount: { value: 3 },
});

//# var sam = Object.create(User is the prototype that we want to access, now the object that we are passing).....so there are 2 objects here 1st prototype and the other one is the object values you are passing...you can pass the key value pair in a particular syntax.....
sam.getUserName();