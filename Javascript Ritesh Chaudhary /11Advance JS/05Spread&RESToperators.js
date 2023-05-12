// if you ever incounter this ...args three dots with args and maybe sometime with the variable name ...deepak then you have already seen both spread and rest

//! these two are same it is just the situation and the challenge while coding that make a difference between both of them....nobody is going to say that to use it as a spread or rest you have to identify with the challanges in front of you...

//we will first talk about where the spread and rest resides....and then we will study spread and rest one by one...

//# there is a math library in which there is a method known as max through which we can find the biggest value..it can take as many values as we give and it will give us the max value...

// var returnedValue = Math.max(2, 5, 7, 4, 2, 8);
// console.log(returnedValue);
// o/p:- 8

//# lets take another example => lets us take the empty object and using assign method lets add some key value pair in the object

//? we can add as many key value pair as we can it just adds up in the main object for example here we have taken two pairs of key value pair and it just adds in the main object....

// var myObj = {};

// Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 9, y: 8, x: 7 });
// console.log(myObj);

// o/p:- { a: 1, b: 2, c: 3, z: 9, y: 8, x: 7 }

// lets take another example...

// function sumOne(a, b) {
//   return a + b;
// }
// console.log(sumOne(5, 4));  //this is simple and it give output 9

//# but lets just say that instead of passing 5, 4 if we pass an array having 5, 4 number in it..lets see

// var myArray = [5, 4];
// console.log(sumOne(myArray));

//#it gives output 5,4undefined it happens when the type of the data dosent match we have to pass there number string or letters it get added and that also is to be equal to the artribute pass ..if you passes the artribute is more than required it just simply ignore it....for example

// console.log(sumOne(5, 4, 1));
// it gives the output :- 9.

//# let me show you a magic ======spreadOperator======

function sumOne(a, b) {
  return a + b;
}
var myArray = [5, 4];
console.log(sumOne(...myArray)); //this is spread operator

// o/p = 9

//# when ever your method requies a value individually but you have the value in group like in array or object or map form...to spread it we use spread operator ....it spread the group value and make it use in the method or function in which you are using it...
//? why use spread because i dont want to change the function defination and i have data in group so that why we use it..

//=====REST OPERATOR======
//# when you dont know about how much agrument you are going to pass then just use ...args (generally you see args but you can take up the name what ever you want)

//now lets use for of loop to make a sum function...and remember we are using for of loop

function sumOne(...args) {
  console.log(args);
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
}

console.log(sumOne(1, 2, 3));

//it gives you the sum and you dont have to think about the number of artribute...you can add 1000 numbers without any problem of artribute

//# but lets log what is arg and whats happening behind the scenes ...

// add console.log (args) in function ...it will give you the output [ 1, 2, 3 ] and this is array...

//so basically it is converting the spred numbers into array and thats the reason for of loop work here ...because it is an array

//! spread and REST are reverse of each other

//# LETS make this more intresting first two value you give should be multiplied and the rest of it are gonna be added can we make this function

function sumTwo(a, b, ...args) {
  console.log(args);  //o/p:- [ 1, 1, 1 ]
  let multi = a * b;
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return [sum, multi];
}

console.log(sumTwo(2, 3, 1, 1, 1));
//o/p:- [ 3, 6 ]


// [1 1 1] goes to args and form an array and (2, 3) go in function as indivisual value and as we returning the values in array so the output comes in the array form....[ 3, 6 ]

