// *    Arithmetic operator
//      +,  -,  /,  *,  %,  **(exponential)
//*     Logical operator
//      && (AND) ||(OR) !(NOT)
//*     Increment and decrement operator
//      ++    -- (pre and post)
//*     Assignment operator
//      =, +=, -=, /=, *=, %=        (a+=1 => a=a+1)
//*     Comparison operators 
//todo  they return only boolean values.
//      <, >, >=, <=, ==, ===(both datatype and value should be equal), !=(not equal to) .


//      WAP to calculate the course discount on udemy website


var discount, listPrice, sellingPrice;

sellingPrice = 199;
listPrice= 799;
discount = ((listPrice - sellingPrice)/listPrice)*100;

console.log("discount price on course is "+discount+"%");

// !this console will give us the full value of discount that is 75.09386733416771, but we want only integer now comes the typecasting, there are libraries available in js for this.

console.log("discount price on course is "+ Math.round(discount)+"%");

// Math.round => eoundof the number.

var result = listPrice > sellingPrice;   //# this operator always give us result in true false form.
console.log(result);


//? Now we can find the dataType of the variable if we want.... typeof is a inbuit function through which we cam find the dataType of the variable.

console.log(typeof(result));
console.log(typeof(listPrice));
