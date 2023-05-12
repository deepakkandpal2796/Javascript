function isEven (element){
    // this is the long code...we can make it shorter...

    // if(element%2 == 0){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    return element%2 == 0 ; //? this will return true if even and false if odd because we used a comparison operator....
};

console.log(isEven(2));
console.log(isEven(5));


//# arrow function

var isEven = (element) => {
    return element%2 == 0 ;
};

// var isEven = (element) => {
//     element%2 == 0 ;
// };
// console.log(isEven(8));

//# if we dont not put return keyword then this return undefine.......We will find out later just remember this returns undefined....




//# every method on array => every method is a call back function...it goes into your array and checks every single element and we can also make conditions in bracket to check for that.....


var result = [2, 4, 6, 8].every(isEven);   
console.log(result);   
//o/p == true
//* every operation in array is used to deal with each element in an array...this gives you result in true false so it is useful for checking condition......in bracket you have to define the condition ...in bracket if you call the function do not use the normal way to call which means do not use paranthises......

//? output for all the even number is true but if you have one odd number in the array then it will return false for the whole array...

var result = [2, 7, 6, 8].every(isEven);
console.log(result);
// o/p == false

var addTwo = (a) => {
    return a+2;
}

var answer = [2, 5, 7, 8, 9].every(addTwo);
console.log(answer);

//# basically this gives you result in true false hence every opration on an array is very useful to check conditions...

//! so its is important to study documentation for this because we will be using these things in react also....

//todo there are other call back function also === map, filter


//!=============================The thing we are doing in react============================================


//#CALL BACK FUNCTION => A simple function which dosent have name.

// how to write call back => now in ES6 ES8 we are writting call backs in arrow function format....

// to write a call back we will do  .every(() => {}) ......in the brackets we write the atribute and in the curly brackets we write the operation .every((e) => { return e % 2 == 0}).....so that became a function which will work in every element as we use every keyword to select every element.


var result = [2, 7, 6, 8].every((newElement) => {
    return newElement % 2 === 0;
});

//? most of the time you will see something different.....to make code shorter

// var result1 = [2, 7, 6, 8].every((newElement) => (newElement % 2 === 0));
// console.log(result1);

//# But if you dont want to write that return keyword then you have to remove scopes/curly braces from the arrow function...both give same output...



//! REMEMBER THIS.......==>

//# remeber if you used return keyword then use this   (() => {}) 
//# if you are using it without return then use this   (() => ())