//# 1st complete script.js then dom then come here 

//# ES6+ features 

//#Destructuring - is a feature introduced in ECMAScript 2015 (ES6) that allows you to extract values from arrays or objects into individual variables. It provides a concise and convenient way to assign values from complex data structures.( Basically it is assigning values to the variables )

//# Also the destructuring means to combine array and objects 

console.log("---------DESTRUCTURING ARRAY------------")

// Destructuring Arrays:
// To destructure an array, you use square brackets ([]) on the left-hand side of the assignment operator (=). The number of variables on the left-hand side should match the number of elements in the array.

const numberss = [1, 2, 3, 4, 5];

// Destructuring the array
const [a, b, c, d, e] = numberss;
// We can see the array is assigned to variables 

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
console.log(d); // Output: 4
console.log(e); // Output: 5


console.log("---------SKIPPING ELEMENTS ARRAY------------")

// Skipping the elements in the arrays
const numbers2 = [1, 2, 3, 4, 5];

// Skipping elements in the array
const [a2, , c2, , e2] = numbers2;

console.log(a2); // Output: 1
console.log(c2); // Output: 3
console.log(e2); // Output: 5

console.log("---------DESTRUCTURING OBJECTS------------")

// Destructuring Objects:
// To destructure an object, you use curly braces ({}) on the left-hand side of the assignment operator. The variable names on the left-hand side should match the property names of the object.

const person = {
    fullName: 'John Doe',
    age1: 30,
    profession: 'Developer'
  };
  

  // Destructuring the object
  const { fullName, age1, profession } = person;
  
  console.log(fullName);       // Output: 'John Doe'
  console.log(age1);        // Output: 30
  console.log(profession); // Output: 'Developer'
  
  console.log("---------DESTRUCTURING OBJECTS V2------------")

  //You can also assign the values to variables with different names:

  const person2 = {
    name: 'John Doe',
    age2: 30,
    profession2: 'Developer'
  };
  
    // Assigning to variables with different names
  const { name: full_Name, age2: years, profession2: job } = person2;
  
  console.log(full_Name); // Output: 'John Doe'
  console.log(years);    // Output: 30
  console.log(job);      // Output: 'Developer'



  console.log("---------COMBINING ARRAY WITH DESTRUCTURING------------")

//# We can also combine two arrays and object this is also comes under destructuring.

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

const arr = [ ...arr1, ...arr2]
const arrV2 = [arr1, ...arr2]
const arrV3 = [arr1, arr2]


console.log(`arr1 :`)
console.log(arr1)
console.log(`arr2 :`)
console.log(arr2)
console.log(`arr : (this gives both array combined)`)
console.log(arr)
// arr : (this gives both array combined)
// [ 1, 2, 3, 3, 4, 5 ]
console.log(`arrV2 : (array inside array and we have elements of second array)`)
console.log(arrV2)
// arrV2 : (array inside array and we have elements of second array)
// [ [ 1, 2, 3 ], 3, 4, 5 ]
console.log(`arrV3 : (Both the arrays are inside the array)`)
console.log(arrV3)
// arrV3 : (Both the arrays are inside the array)
// [ [ 1, 2, 3 ], [ 3, 4, 5 ] ]
console.log("---------COMBINING ARRAY OF OBJECTS WITH DESTRUCTURING------------")
// Here we can combine the array of objects with destructuring.

const arr3 = [{
    name: 'John',
}]

const arr4 = [{
    name: 'Doe',
}]
const arr5 = [...arr3, ...arr4]
const arr6 = [...arr3, arr4]
const arr7 = [arr3, arr4]

console.log(`arr3 :`)
console.log(arr3)
console.log(`arr4 :`)
console.log(arr4)
console.log(`arr5 : objects inside arrays `)
console.log(arr5)
// arr5 : objects inside arrays 
// [ { name: 'John' }, { name: 'Doe' } ]
console.log(`arr6 : 1st object inside an aaray and 2nd object inside and array which is inside array`)
console.log(arr6)
// arr6 : 1st object inside an aaray and 2nd object inside and array which is inside array
// [ { name: 'John' }, [ { name: 'Doe' } ] ]
console.log(`arr7 : Both object inside arrays which are inside an array`)
console.log(arr7)
// arr7 : Both object inside arrays which are inside an array
// [ [ { name: 'John' } ], [ { name: 'Doe' } ] ]
console.log("---------COMBINING OBJECTS WITH DESTRUCTURING------------")

const obj1 = {
    name: 'John',
}
const obj2 = {
    age: 30,
}

const obj3 = {
    ...obj1,
    ...obj2,
}
const obj4 = {
    obj1,
    obj2
}

const obj5 = {
    name : 'Deepak',
    age : 25
}

const obj6 = {
    ...obj1,
    ...obj5
}
const obj7 = {
    ...obj5,
    ...obj1
}



console.log(`obj1 : `)
console.log(obj1)
console.log(`obj2 : `)
console.log(obj2)
console.log(`obj3 : `)
console.log(obj3)
console.log(`obj4 : objects inside the object`)
// obj3 : 
// { name: 'John', age: 30 }
console.log(obj4)
// obj4 : objects inside the object
// { obj1: { name: 'John' }, obj2: { age: 30 } }
console.log(`obj6 : If both the objects have the common keys then it will take the rewrite the key `)
console.log(obj6)
// obj6 : If both the objects have the same keys then it will take the rewrite the key 
// { name: 'Deepak', age: 25 }
console.log(`obj7 : If both the objects have the common keys then it will take the rewrite the key `)
console.log(obj7)
// obj7 : If both the objects have the same keys then it will take the rewrite the key 
// { name: 'John', age: 25 }'


console.log("---------DECLARING OBJECTS OUTSIDE THE OBJECT USING DESTRUCTURING------------")

const username = 'deepak2796'

// this is the old way to use variable in the object 
// const obj = {
//     name : 'Deepak',
//     age : 25,
//     username: username
// }

//New way to declare is just use username 
const obj = {
    name : 'Deepak',
    age : 25,
    username,
}
console.log(obj);

// { name: 'Deepak', age: 25, username: 'deepak2796' }

console.log("---------ARROW FUNCTIONS------------")

//# Old way to declare the function 
// function demo(){
//      statement
// }

// you can call this normal function anywhere you want (below the function, above the function)
// this type of function declaration goes to the global context (which is windows in browser) so you can call this function anywhere you want it will work 

//# Arrow function 
const demo = (argument1, argument2) => {
    console.log(argument1, argument2)
}
//as this is only one line function we can write 
const demo2 = () => console.log("Hi!!");

// you can remove the bracket around the argument if there is only one argument 
const demo3 = name => console.log('Hi!'+name)

demo('deepak', 'akansha'); 
demo2();
demo3('deepak');

console.log("---------ARROW FUNCTIONS IN EVENT LISTNERS------------")

//# OLD WAY 
// const incrementBtn = document.querySelector('.incrementBtn');
// function incrementCounter (){
//         console.log("Clicked button")
//     }
// incrementBtn.addEventListener('click', incrementCounter)

//# NEW WAY
// const incrBtn = document.querySelector('.incrementBtn');
// incrBtn.addEventListener('click', () => {
//     console.log("Clicked button")
// })

// when you have only one line of statement you can skip curly brackets
// incrBtn.addEventListener('click', () => console.log("Clicked button new"))


console.log("---------NEW ARRAY METHODS------------")
// methods that can apply on array 
// https://www.programiz.com/javascript/library/array/concat

const arrNew = [1,2,3,4,5,6,7,8]

//Way to access 
for(let i = 0; i < arrNew.length; i++){
    console.log(i);
}
// make aarNew Double
console.log("---------WITHOUT MAP------------")

//The .map() function is a method available for arrays in JavaScript. It is used to iterate over each element of an array and apply a callback function to transform each element into a new value.

const arrPush = []
for(let i = 0; i < arrNew.length; i++){
    const element = arrNew[i]
    arrPush.push(element**2);
}
console.log(arrPush)

console.log("---------MAP METHOD------------")

 

const newMappedArray = arrNew.map(function(element){
    console.log(element)
    return element*2;
})
console.log(arrNew, newMappedArray)



//transfirm the arrNew to tripple

function tripple (element){
    return element*3;
}
const newMappedArray2 = arrNew.map(tripple)

console.log(arrNew, newMappedArray2)

console.log("---------MAP USING ARROW FUNCTION------------")
//# we can make this in a line using arrow function, you dont have to run loop every time 
const newMappedArray3 = arrNew.map(element => element*2 )
console.log(arrNew, newMappedArray3)

// Convert into binary 
console.log("---------CONVERT INTO BINARY USING MAP------------")

// .toString(2) method can be used to convert a numeric value into its binary representation as a string.
const binaryArr = arrNew.map(element => element.toString(2))
console.log(binaryArr);

console.log("---------FILTER METHOD------------")

//# The .filter() function is a built-in method in JavaScript that operates on arrays. It allows you to create a new array that contains only the elements from the original array that satisfy a certain condition or criteria.



// arrNew = [1,2,3,4,5,6,7,8]

const filteredArray = arrNew.filter(number => number % 2 === 0)
console.log(arrNew, filteredArray)

// o/p [  1, 2, 3, 4,  5, 6, 7, 8] [ 2, 4, 6, 8 ]

const fruits = ['apple', 'banana', 'orange', 'kiwi'];

const longFruits = fruits.filter(fruit => {
  return fruit.length > 5;
});

console.log(longFruits);

// Output: ['banana', 'orange']

// Filtering Objects

const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 },
    { name: 'Diana', score: 88 }
  ];
  
  const passedStudents = students.filter(function(student) {
    return student.score >= 80;
  });
  
  console.log(passedStudents);
  /* Output:
  [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Diana', score: 88 }
  ]
  */
  

console.log("---------DEEP DIVE ON FILTER METHOD------------")

// You provide a callback function to the .filter() method. This callback function will be called for each element in the original array.

// The callback function takes three parameters: "element", "index", and "array". The "element" represents the current element being processed, "index" represents the index of the current element, and "array" represents the original array being filtered.The first parameter to be passed will always reamin in the same order as it is written element, index then array.

// Inside the callback function, you write the condition or criteria that determines whether an element should be included in the filtered array. If the condition is true for a particular element, that element is added to the new array.

// Creating a New Array: The .filter() function does not modify the original array; instead, it creates a new array containing the elements that pass the filtering condition.

// Returning Boolean Values: The callback function passed to .filter() must return a boolean value (true or false). If the function returns true for an element, it is included in the filtered array. If it returns false, the element is excluded.

// Accessing Element Information: The callback function has access to three parameters: "element", "index", and "array". You can use these parameters to perform operations on the current element, check its index, or access the original array.

console.log("---------USING PARAMETERS OF FILTER FUNCTION------------")


//# We can acess the index element also in filter for use 

const words = ['apple', 'banana', 'orange', 'grapefruit'];

const longWords = words.filter((word, index) => {
  console.log(`Processing word "${word}" at index ${index}`);
  return word.length > 5;
});

console.log(longWords);

// Output: 
// Processing word "apple" at index 0
// Processing word "banana" at index 1
// Processing word "orange" at index 2
// Processing word "grapefruit" at index 3
// [ 'banana', 'orange', 'grapefruit' ]

console.log("---------USING ALL PARAMETERS IN FILTER FUNCTION------------")
//# Filtering the unique number : (using all the parameters in the callback)

const numbersNew = [1, 2, 3, 3, 4, 4, 5, 5];

const uniqueNumbers = numbersNew.filter((number, index, array) => {
  console.log(`Processing number "${number}" at index ${index}, and the result of array.indexOf(number) = ${array.indexOf(number)} `);
  return array.indexOf(number) === index;
});

console.log(uniqueNumbers);
// o/p :- 
// Processing number "1" at index 0, and the result of array.indexOf(number) = 0 
// Processing number "2" at index 1, and the result of array.indexOf(number) = 1 
// Processing number "3" at index 2, and the result of array.indexOf(number) = 2 
// Processing number "3" at index 3, and the result of array.indexOf(number) = 2 
// Processing number "4" at index 4, and the result of array.indexOf(number) = 4 
// Processing number "4" at index 5, and the result of array.indexOf(number) = 4 
// Processing number "5" at index 6, and the result of array.indexOf(number) = 6 
// Processing number "5" at index 7, and the result of array.indexOf(number) = 6 
// [ 1, 2, 3, 4, 5 ]


// dont treat this funciton as loop, 
// Processing number "1" at index 0, array.indexOf(1) === 0; this is true as array.indexOf(1) = 0 (this will push into the new array )
// Processing number "2" at index 1, array.indexOf(2) === 1; this is true as array.indexOf(2) = 1 (this will push into the new array )
// Processing number "3" at index 2, array.indexOf(3) === 2; this is true as array.indexOf(3) = 2 (this will push into the new array )
// Processing number "3" at index 3, array.indexOf(3) !== 3; this is false as array.indexOf(3) = 2 because when you apply indexOf(3) on this array then it will find the index of the 1st "3" present inside the array not the 2nd hence this will give you the index 2 not 3 hence it will not go into the unique array.

console.log("---------SKIPPING PARAMETERS IN FILTER FUNCTION------------")

// when you skip a parameter in the callback function of the .filter() method, it's important to include a placeholder to maintain the correct positional order of the parameters. The underscore _ is a commonly used convention as a placeholder to indicate that a parameter is intentionally ignored.
//you have to use 2 underscore in the second parameter you skipped 

const numbers = [1, 2, 3, 4, 5];

const filteredArray2 = numbers.filter(( _, __, array) => {
  return array.length > 3;
});

console.log(filteredArray2);

// Output: [1, 2, 3, 4, 5]

console.log("---------FIND METHOD------------")

// The .find() method in JavaScript is used to search for an element in an array based on a specific condition. It returns the first element that satisfies the condition or undefined if no element is found.

// Here's the general behavior of the .find() method:

// If a matching element is found, it is returned as the result.
// If no matching element is found, the method returns undefined.

const arrayFind = [1, 2, 3, 4, 5];

const foundNumber = arrayFind.find(function(number) {
  return number > 3;
});

console.log(foundNumber);
// Output: 4

console.log("---------PARAMETERS USED IN FIND METHOD------------")

// The .find() method can take two additional optional parameters in addition to the element parameter. The complete syntax of the .find() method is as follows:

arrayFind.find(function(element, index, array) {
    // Condition to test for each element
  });

//# EXAMPLE: 

//   arrayFind = [1, 2, 3, 4, 5];

const foundIndex = arrayFind.find(function(element, index, array) {
  return element === 3 && index > 1 && array.length > 4;
});

console.log(foundIndex);
// Output: 2

console.log("---------FIND METHOD IN OBJECT OF ARRAY------------")

// If you have an array of objects and want to find the first object that matches a certain property value, you can use the .find() method along with a condition that checks for the desired property value. For example:

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Alice' }
  ];
  
  const foundUser = users.find( user => user.id === 2 );
  
  console.log(foundUser);
  // Output: { id: 2, name: 'Jane' }
  


console.log("---------FOR EACH LOOP------------")
// forEach loop is a method that allows you to iterate over the elements of an array or an array-like object and perform a specified action for each element. It provides a simpler and more readable alternative to traditional for loops when you only need to iterate over the elements without the need for indexing.

//# forEach loop does not provide a way to break out of the loop early. If you need to terminate the loop prematurely or skip certain elements based on a condition, you may consider using a traditional for loop

const forEachArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

forEachArr.forEach( i => {
    console.log(i)
});

// o/p: 
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// forEachArr.forEach( i => {
//     if( i % 2 === 0){
//         continue;
//     }
// });

// o/p : SyntaxError: Illegal continue statement: no surrounding iteration statement

// forEachArr.forEach( i => {
//     if( i % 2 === 0){
//         break;
//     }
// });

// o/p: SyntaxError: Illegal break statement


//You can put conditions but cant put break and continue in for each
forEachArr.forEach( i => {
        if( i % 2 === 0){
            console.log(i);
        }
    });

//# forEach loop does not create a new array or modify the original array. Its purpose is to perform an action for each element of the array. If you need to transform or filter the array, you might consider using other methods like .map() or .filter().


// forEach loop is a handy method for iterating over arrays in JavaScript, providing a concise syntax for performing actions on each element.

console.log("---------OLD WAYS OF USING STRING------------")

// Earlier if you are writting a string and you want to go to the next line you cant break the string
// Const mySelf = 'Hi my name is deepak.
// I am 23 year old';   // error

// Instead you can use forward slashe n  

const mySelf = 'Hi my name is deepak.\nI am 23 year old';   

console.log('mySelf : '+ mySelf)
//if i want to use the dynamic variable in this 
const deepak = {
    name: "deepak",
    age: 23,
}

const mySelf2 = 'Hi my name is'+ deepak.name +'.\
I am '+ deepak.age +' year old'; 
// we have to add variable to the string 


console.log("---------TEMPLATE LITERALS------------")

//Now template literals comes into the picture 
// In this we use back ticks

// You dont have to use any forward slash we just have to press enter to be in next line 
const aboutMe = `Hi my name is deepak
I am 23 year old`

// You can use a varibale inside the string
// here we use ${} this format to enter dynamic variables 
const aboutMeLatest = `Hi my name is ${deepak.name}. 
I am ${deepak.age} year old`

console.log(`About me Latest: ${aboutMeLatest}`)