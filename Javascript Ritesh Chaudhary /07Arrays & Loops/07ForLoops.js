// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// break and continue keywords are for scope/{}.
const myStates = ["Delhi", "Rajasthan", 1947, "Kerela", "Tamilnadu", "Assam"];

for (let i = 0; i < myStates.length; i++) {
  if (typeof myStates[i] !== "string") {
    continue;
    // continue is just says to continuing to the given condition and don't execute the rest of the code left. basically we can say it as skiping...... skip if the current condition is happening
  }
  console.log(myStates[i]);
}
console.log("New loop");

for (let i = 0; i < myStates.length; i++) {
  if (typeof myStates[i] == "string") {
    continue;
    // continue is just says to continuing to the given condition and don't execute the rest of the code left. basically we can say it as skiping...... skip if the current condition is happening.
  }
  console.log(myStates[i]);
}

//break : is stop basically...as soon as it matches the condition it will stop the further loop and get out of it

for (let i = 0; i < myStates.length; i++) {
    if (typeof myStates[i] !== "string") {
      break;
    }
    console.log(myStates[i]);
  }