//* Fill and filler are the operation on array....



//=======================FILL====================================


var testArray = [2, 3, 4, 5, 6, 7, 8, 9];
// we are making direct change in array if you dont want that just do
var newArr = testArray.fill("p");
console.log(newArr);
console.log(testArray.fill("h"));
//# This will fill the array with h
//o/p- ['h', 'h', 'h','h', 'h', 'h','h', 'h']

console.log(testArray.fill("d", 2));
//# we can also define the place from where the fill start...here the fill will start from the 2nd index in array...
//o/p- ['h', 'h', 'd','d', 'd', 'd','d', 'd']

console.log(testArray.fill(0, 2, 5));
//# this will give you the starting and the ending point to fill....here 2 is inclusive or included and 5 is exclusive or excluded
//o/p- ['h', 'h', '0','0', '0', 'd','d', 'd']

console.log(testArray.fill("deepak", 2, 3));
//# this is also used to change only one position ....
//o/p- ['h', 'h', 'deepak','0', '0', 'd','d', 'd']





//=======================FILLER====================================

//# As the name suggest it is used to filter the array.........(1) it will create a new filtered array(as per given condition), (2) we have to use here call back(to look cool).

const myNumber = [22, 42, 45, 64, 67 ,85 , 88, 98];
const filtred = myNumber.filter((num) => ( num != 85));
console.log(filtred);
//o/p => [22, 42, 45, 64, 67 ,88 , 98] 85 is removed.
const result = myNumber.filter((num) => ( num <= 85));
console.log(result);
//o/p => [22, 42, 45, 64, 67 ,85] greater than 85 is removed.