// Slice and Splice are the new array methods.

//slicing => it will slice the chunk out of the array.

var users = ["Deepak", "Bhavesh", "Divya", "Anamika", "Tushar"]
console.log(users.slice(1, 3));   //! 1 is inclusive(included) and 3 is excluded(excluded).
//o/p => ["Bhavesh", "Divya"]
console.log(users.slice(2));       //! In these cases the number is included and all the value before that get excluded
//o/p => ["Divya", "Anamika", "Tushar"]


//splicing

users.splice(1, 3, "Hi"); //! here the first and the 2nd value both are included or inclusive so we say the first value as "start value" and the second value is known as the "count value"
//# it counted from start to the count value remove them and add what ever you said
console.log(users);
//  orignal array ["Deepak", "Bhavesh", "Divya", "Anamika", "Tushar"]
//o/p:- [ 'Deepak', 'Hi', 'Tushar' ]

var marks = [23, 45, 51, 67, 88, 32]
marks.splice(1, 3, "hi");   //! 1 to 3 me sab remove krke hi add kr diya
console.log(marks);
//o/p:-[ 23, 'hi', 88, 32 ]


var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
console.log(alphabets.splice(1, 3, "hi")); 
//o/p:-  [ 'b', 'c', 'd' ]
//? this will show you deleted values......to get the rest value you have to print array not the splice function...because splice function stores the value which is deleted from the array so thats why it is happpening



//=====================================SOME NEW TYPE==============================================

var users = ["Deepak", "Bhavesh", "Divya", "Anamika", "Tushar"]
users.splice(1, 3, "Hi", "bye"); 
console.log(users);

//1 to 3 sari value remove krke hi and bye add kr dega
//o/p = [ 'Deepak', 'Hi', 'bye', 'Tushar' ]



