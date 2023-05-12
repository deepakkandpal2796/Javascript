//todo falsy values & truthy values.

//* A falsy value is a value which is considered to be a false value when evaluated.

// undefined, 0, null, " "(empty string), NaN(not a number), these are the falsy values.

//! Anything other than a falsy value is a truthy value.

var x;
if (x) {
    console.log("value is defined");
}
else{
    console.log("value is not defined");
}
//undefined is a false value because here x is undefined and it is considered as false, thats why else value is taken as output

var y = null;
if (y) {
    console.log("value is not null");
}
else{
    console.log("value is null");
}
//null is a false value because here y is null and it is considered as false, thats why else value is taken as output.

var z = NaN;
if (z) {
    console.log("value is a number");
}
else{
    console.log("value is not a number");
}
//NaN is a false value because here z is NaN and it is considered as false, thats why else value is taken as output.


// ==================================================================================


// type coercion is checking the value as well as data type.java script dosent do type coercion by it self for eg.


user = "2"; //! its is a string.

if(2==user){
    console.log("String number is equal to number's number");
}
else if(2===user){
    console.log("string datatype is equal to number datatype");
}
else{
    console.log("this is type coericion and hence string is not equal to number");
}


