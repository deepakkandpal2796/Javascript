var obj = new Object();
// when we are studying the object we have discussed this new way of declaring object...and we have discussed a whole lot of properties in object.

var myMap = new Map(); //decleration of maps is same as object.

// we have methods in maps they work almost like object but maps are not object, they work in key value pair....where keys can be anything and values can be anything..and same as object we can access them

//# lets set or insert value in map

myMap.set(1, "Uno"); //same as setter in object.1 is the key for uno value
myMap.set(2, "Dos");
myMap.set(3, "Tres"); 
myMap.set(4, "Cuatro"); 

console.log(myMap);
// o/p: Map(4) { 1 => 'Uno', 2 => 'Dos', 3 => 'Tres', 4 => 'Cuatro' }
//# map will also give us the length of the map in bracket


//! how to access all the keys and values in map

for (let key of myMap.keys()) {   
    console.log(`key is ${key}`); 
}

// o/p:- key is 1
//       key is 2
//       key is 3
//       key is 4

//! dont be confused this myMaps.keys() is a predefine method except that key myMap all are just variable to access

for (let value of myMap.values()) {
    console.log(`Values is ${value}`);
}

// o/p:-   Values is Uno
//         Values is Dos
//         Values is Tres
//         Values is Cuatro

//! how to access keys and values together ==> we have to use a array as a variable and we dont need a map method { myMaps.values()/keys() } to run this loop....

for (let [key, value] of myMap) {
    console.log(`Key is : ${key} and Value is ${value}`);
  }

// o/p:- 
// Key is : 1 and Value is Uno
// Key is : 2 and Value is Dos
// Key is : 3 and Value is Tres
// Key is : 4 and Value is Cuatro



//# we can also use for each loop to access the element of the object and here things got tricky lets see

myMap.forEach((key) => console.log(`${key}`));

// o/p:-
//       Uno
//       Dos
//       Tres
//       Cuatro

//? we are here asking for the key and for each loop is giving us values
// when we are using for of loop ot is giving us first keys and then values.......... for (let [key, value] of myMap) 
//but when we are using for each it is giving us first values....because if you remember from arrays for each loop focous on values not indexes and here in the map javascript knows the keys as indexes  

//! for each loop will give us value first but if we ask for keys it will definately give us keys also but first it will give us value..
//! for of loop will give us keys first but if we ask for values it will definately give us values also but first it will give us keys..

myMap.forEach((v, k) => console.log(`${v} and key is ${k}`));


//====== methods to manupulate maps======

// you can delete the values with the help of key pair
myMap.delete(2);
console.log(myMap);

//similarly like arryas we can find the indexe of any value to access it and almost all array method we can do here plus object methhods so it is kind of mix of arrays and objects...

//type myMaps. and you can see a whole lot of methods explore them...