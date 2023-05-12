const myStates = ["Delhi", "Rajasthan", 1947, "Kerela", "Tamilnadu", "Assam"];

// we use let in most of the loops because for(let i = 0; i< 10; i++){}  so as soon as the scope is over then the compiler has no idea what i is....hence we use let in loops taki variable bs loop tk hi seemit rhe

// let i = 0; //we have to initiate i outside the loop
// while ( i < myStates.length) {
//     console.log(myStates[i]);
//     i++;
// }

//#======================Do while loop ================================
// let i = 0;
// do{
//     console.log(myStates[i]);
//     i++;
// }while ( i < myStates.length);

//# do while loop runs atleast once.
let i = 20;
do {
  console.log(i);
  i++;
} while (i < 10);
//the condition is not true but still the loop runs atleast once..and we can also use break and continue here..