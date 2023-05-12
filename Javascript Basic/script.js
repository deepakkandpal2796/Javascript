//? Variables 
console.log("----------VARIABLES---------------")
//Const 
// you have to give values to the const variable at the time of declaration 
const myfFirstVariable = 20;
console.log(myfFirstVariable);
//!myfFirstVariable = 21; Error - its a constant variable

//Let keyword
// Its not coumpulsary to give values to the variable at the time of the declaration
let mySecondVariable = 21;
console.log(mySecondVariable);
//!we can change its value 
mySecondVariable = 24;
console.log(mySecondVariable);

//Var keyword
//This is no loger required, We will discuss it later.
console.log("-------------DATATYPE------------")
//? DataType - In js we dont have to declare the tyoe of the variable before declaring it 
// string - 
// boolean - 
// numbers - 
//undefined - it is a value of a variable whose value is not defined yet 
let firstName
console.log(firstName); // undefined
// Array - JS allows us to strore different tyoe of values in array.
const personalInfo = ["Deepak", 23, false]
console.log(personalInfo[0])
console.log(personalInfo[3]) // undefined 
//Bigintnumber - to declare the big int you just have to write n at the end of it. 
//It can store really big number
const bigIntNumber = 11111111111111n 
//Null - null means nothing 
//What is difference between null and undefined 
//The only diffrence is in null we are explecitely saying that this have no value on the other hand 
//In undefined the value is not there at the time of the declaration.

console.log("------------TYPE OF FUNCTION-------------")
//? TypeOf function

let myAge = 23;
let amIABoy = true;
let variable = null;
console.log(typeof(myAge));//number
console.log(typeof(amIABoy));//boolean
console.log(typeof(bigIntNumber));//bigint
console.log(typeof(variable));//! object why?
console.log(typeof(personalInfo)); //!object its saying array an object why? 
//!In js arrays and null values are objects. well study this in detail when we study object 


console.log("-----------MATH OPERATOR--------------")
//? Math Operators

// Addition + 
// Subtraction - 
// Multiplication *
// Division /
// Modules % (give remainder)
// Power ** (give power)
// Increment and Decrement operator - two types preIncrement and PostIncrement same with decrement 
// i = i + 1 also be written as i++ similarly i = i - 1 , i--
//!Pre incremetent ++i and post increment i++ 
//!Pre decrement --i and post decrement i--

//? Console.log() - mostly use in debugging the code

//? Functions - can write a repeted code as a function 
//Syntax - function functionName(attributes){Statements}
// Passing parameters means passing variable values for certain variable to get coustomise output

let yearOfBirth = 2000

function age (currentYear){
    console.log( "Age : " + (currentYear - yearOfBirth) ); 
}

age(2023);

//return statement 
// There are two methods to get the values from the function 1 - console.log
// 2nd is make a return statement as soon as it calls function it give the value back where the function is called 
// statement after return never executes in JS
let name, ageOfStu, course;
function stuDetails (name, ageOfStu , course){
    let details = "-------------"+ "\nName : " + name + "\nAge : " + ageOfStu + "\nCourse : " + course ;
    return details
}

//now we can store it in a variable and then use it or print it 
let stu1 = stuDetails('Deepak', 22, 'JS');
let stu2 = stuDetails('Akansha', 21, 'SQL');
console.log(stu1);
console.log(stu2);

//Directly log the function 
console.log(stuDetails('Kabir', 21, 'JAVA'));

//Ahead we will return array functions and many more eoth js

console.log("-----------CONDITIONALS--------------")
//? Conditionals IF, ELSE, ELSE IF
function shouldIGetALicense(age){
    if(age > 18){
        console.log("This person is above 18")
        return 
    }
    console.log("This person is below 18")
}
shouldIGetALicense(12)


//using return statemetn in the conditionals make it break 
// Create a function named performMath that accepts three parameters - number1, number2 and operation
// If operation is '+', add the numbers and return the result
// If operation is '*', multiply the numbers and return the result
function performMath (number1, number2, operation){
    if(operation == '+'){
        return number1+number2
    }else if (operation == "*"){
        return number1*number2
    }
}

console.log(performMath(10, 10, '+'))
console.log(performMath(10, 10, '*'))
console.log("-----------LOGICAL OPERATOR--------------")

//? Logical operator 

function shouldIGetALicense(age, bribe){
    if(age > 18){
        console.log("This person is above 18")
        return 
    }else {
        if(bribe>100){
            console.log("you pass")
        }else{
            console.log("This person is below 18")
        }
    }
    
}
shouldIGetALicense(12, 101)

//Reaarange the code using logical operator
console.log("-----------V2--------------") 

function shouldIGetALicenseV2(age, bribe){
    if(age <= 18 && bribe > 100){
        console.log("you pass")
        return 
    }else if (age > 18){
            console.log("This person is above 18")
            return
    }else if(bribe <= 100){
        console.log("This person is below 18")
    }
}
shouldIGetALicenseV2(17,1)

//!  There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing). 

console.log("-----------FALSY AND TRUTHY--------------")

//? falsy and truthy values 
// Javascript is a dynamic type language that means js tries to understand the type of the variable at runtime
//if we use a string in the if statement where a boolean value is requierd then javascript 
//tries to convert it into the boolean and then give the output 

//How javascripts tells other than boolean (true and false) which value is true and which value is false?
//There are truthy and falsy values-  there are some values which js treats as false and some as true on the runtime
//undefined, 0, null, false these are basic falsy values other than that all are truthy 

if(!undefined){
    console.log("undefined is a falsy value")
}
if(!null){
    console.log("null is a falsy value")
}
if("fdhsfjd"){
    console.log("any string is a truthy value")
}

console.log("-----------ARRAYS--------------")

// collection of elements is arrays 

let myFriends = []

//# push function add the element in the array
function addMyFriends(friend){
    myFriends.push(friend);
    console.log(myFriends);
}

addMyFriends('Akansha');
addMyFriends('Tushar');

//# unshift add the element in the front of the array
function addToFront(friend){
    myFriends.unshift(friend); 
    console.log(myFriends);
}

addToFront('Mansi');
addToFront('Manpreet');

//# length of an array 

console.log(myFriends.length)

//# how to iterate throgh array 

console.log(myFriends[0]);
console.log(myFriends[1]);
console.log(myFriends[2]);

//# rewrite the value of the array

console.log(myFriends)
myFriends[2] = undefined 
console.log(myFriends)

//# delete last value from the array using pop()
//adding the last value 
myFriends[4] = null 
console.log(myFriends)
//using pop we can remove the last value from the array.
// this will remove the last value from the array as well as return that last value

const lastValue = myFriends.pop() 
// the way to use variable in console statement in js 
console.log(`the last value is = ${lastValue}`);
console.log(myFriends)


console.log("-----------FOR LOOP--------------")

for(let i = 0; i < 10; i++){
    console.log(i);
} 

//# we can iterrate though the elements of array using the loop?? -> to print array "no" for any other thing "yes"
//# In c++ we cant print array directly so we do that here in js we can print the array directly 
//# To push or pop elements from the array "yess!!"

let numbers = []

for(let i = 0; i < 10; i++){
    numbers.push(i)
}

console.log(numbers)

for(let i = 0; i < 5; i++){
    numbers.pop(i)
}
console.log(numbers)

// In JavaScript, there are mainly 4 types of for loops:(rest we will study ahead)

//1 - The for loop: This is the most common type of loop and is used to iterate over a block of code multiple times.

//2 - The for...in loop: This loop is used to iterate over an object's properties.

//3 - The for...of loop: This loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.

//4 - The forEach() method: This is a built-in array method that executes a provided function once for each element in an array.

console.log("-----------BREAK AND CONTINUE--------------")

//# break and continue are control flow statements in JavaScript that can be used within loops to alter the normal execution of the loop.

// BREAK - The break statement is used to terminate a loop prematurely. When a break statement is encountered inside a loop, the loop immediately stops executing and control is transferred to the next statement after the loop.

// I want the loop to be stop at a given number 
console.log("-----------BREAK--------------") 

function breakLoop(number){
    let i =0;
    for(; i < 20; i++){
        if(i === number ){
            break;
        }
    }
    console.log(`${number} loop break at ${i}`);
}
breakLoop(10);
breakLoop(22);

console.log("-----------RETURN INSTEAD OF BREAK--------------") 

//# What happens when you use return instead of break inside a loop?

// return and break are two different control flow statements in JavaScript that serve different purposes.

// The break statement is used to terminate a loop prematurely, whereas the return statement is used to exit a function and return a value.

// If you use return inside a loop, it will not only exit the loop but also exit the entire function. This may not be what you want if you have more code to execute after the loop.

function returnLoop(number){
    let i =0;
    for(; i < 20; i++){
        if(i === number ){
            return;
        }
    }
    console.log(`${number} greater than 20 hence return will not executed`);
}
returnLoop(10);
returnLoop(22);

console.log("-----------CONTINUE--------------") 

//The continue statement, on the other hand, skips over one iteration of a loop. When a continue statement is encountered inside a loop, it skips over any remaining statements in that iteration and moves on to the next iteration of the loop.

//Only add the even number to the array less than the iven number 

let evenNum = []
function continueLoop (number){
    for(let i = 1; i <= number; i++ ){
        if(i % 2 == 0){
            evenNum.push(i);
        }else{
            continue;
        }
    }
}
continueLoop(20);
console.log(evenNum);

console.log("-----------EQUALITY CHECK IN JS--------------") 

// javascript does the typecasting on the runtime and make them equal 
if( 1 == "1"){
    console.log(`string equal to number`);
}
// so we use === instead of == because it also compare the type of the variable 

if( 1 === "1"){
    console.log(`string equal to number`);
}
else{
    console.log(`string not equal to number`);

}

console.log("-----------OBJECTS--------------") 

// Objects is everthing in javascript, function arrays can be objects 
// how to declare objects  
// There are 2 ways one is dot notation another is the square notaion 
//In dot notation we dont have to put the keyname in the quotes and to access the object bwe use the dot notation

console.log("---------DOT NOTATION------------") 

const myObjectDotNotation = {
    keyname: 'value1',
    keyname2: 'value2',
}

console.log(myObjectDotNotation.keyname, myObjectDotNotation.keyname2)
//you can also get the Dot Notation object value from sqare notation 
console.log(myObjectDotNotation['keyname'], myObjectDotNotation['keyname2'])


console.log("---------SQUARE NOTATION------------") 

//Square notation is used when we have spaces in the key name for eg kaeyname 2.1 to access the object bwe use the square notation
const myObjectSquareNotation = {
    'keyname 1.1': 'value 1.1',
    'keyname 2.1': 'value 2.2',
}
console.log(myObjectSquareNotation['keyname 1.1'], myObjectSquareNotation['keyname 2.1'])
//you can't get the Square notation object value from Dot notation 
// console.log(myObjectDotNotation.keyname 1.1, myObjectDotNotation.keyname 2.2) -> error


console.log("---------DOT + SQUARE NOTATION------------") 

//We can also mix and match both square and dot notation 
//# We can also declare object inside an object
const myMixObject = {
    product: {
        'product version1' : 'Completed',
        'product version2' : 'Incompleted',
    },
    developer: 21,
}

console.log(myMixObject.product, myMixObject.developer)
console.log(myMixObject.product['product version1'], myMixObject.product['product version2'])

console.log("-----------PASS BY VALUE & PASS BY REFRENCE--------------") 

//# In programming, there are two ways to pass arguments to a function: call by value and call by reference.

//# Call by value means that the function receives a copy of the value of the argument. Any changes made to the argument inside the function do not affect the original variable outside the function.(in this the value is just copied to the argument of the fucntion so there is no change in the main value)

//# Call by reference means that the function receives a reference to the original object or array. Any changes made to the object or array inside the function affect the original object or array outside the function.(in this the address of the value is passed so, the change is also reflects in the orignal object )

//# In JavaScript, primitive types like numbers and strings are passed by value, which means that the function receives a copy of the value. However, objects and arrays are passed by reference.

let myProfile = {
    name: 'Deepak',
    age: 23,
}

let myFriend = {
    name: 'Tushar',
    age: 24,
}

function primitiveMutate(primitive){
    primitive++;
    console.log(primitive)
}

function mutate(obj){
    obj.age++
}

let num = 100;
primitiveMutate(num)  // o/p: 101
console.log(num)    // o/p: 100
//# this is happening because the num is not passed in the function the "value" of the num is copied in the function so there is no change in the actual value.

console.log(myFriend.age) // o/p: 24
mutate(myFriend)
console.log(myFriend.age) // o/p: 25
//# but when we pass the object in the function and there is any changes in that argument in the function so those changes will reflect in the object also. This is what we call passing the value by refrence.

 

