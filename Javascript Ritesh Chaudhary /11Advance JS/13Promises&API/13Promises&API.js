//# look at img1  it is confusing but in some time you understand this

//? lets just say any promise is either fullfill or reject (we are not talking about pending as of now)

//! if the promise is fullfill then you can chain on then method on it....and if it is rejected then we will be handling it thought the catch which is the error handling part of it...

//thats all this diagram is saying...if promise is fullfill then u can chain on ""then"" methods and if rejected then you can use ""catch"" method....

//===========================================================================

//we cant run api code in the node environment either we will be using this in recat and veu environment or in browser....so i will be writting code here and paste it to the browser console to see the output...

//# in javascript we have a method called fetch ..... fetch always gives a promise..and as we saw in the diagram once the promise is been resolved you can just chain on as many then method as much you want and if it 1, 2 or 3....
//# and if it rejects you can use the catch method

// fetch() //? whatever this fetch says return this...it returns it to the next then
//   .then() //?  whatever this .then method says return this...it returns it to the next then
//   .then() //? so on and so forth
//   .then()
//   .catch(); //? and if due to some reason it dosent work.. the website is not working and all then we have catch

// === WE ALSO HAVE A TRY-CATCH METHOD TO DO ==> VERY VERY IMPORTANT WE WILL STUDY THIS LATER IT MAKES THINGS MORE EASY ===

// try {
//? this is the scope where we try to run the code..
// } catch (error) {
//? and of there is an error handel this code..
// }

//==run this api now==

fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    // i am calling here as response but its just a variable.
    console.log(response); //this shows error in node lets run this in browser.
  })
  .catch();

//# look at the img2 we have there body(...) and if i click on that => look at img3 it goes to body: ReadableStream...in this there are a lot more things to explore but lets just convert it to JSON file to read it

//# convert this in json and we want to check the result of response specifically so add statement to it

fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    console.log("API: ", response.json());
  })
  .catch();

//# as the API response is resolved but in a promise, and as long as it is in the promise format we can chain on another .then()

//# but the first then has to return something to the second then...

  fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    return response.json();
  })
  .then((data) => {  //again data is just a variable name
    console.log("Data is: ", data);
  })
  .catch();

//open img5 we got something understandable we have got catagaories, value , icons ...now we can extract all of this things...lets  extract the joke which is in the value key...

fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //again data is just a variable name
    // console.log("Data is: ", data);
    var joke = data.value;
    console.log("JOKE: ", joke);
  })
  .catch();

  //check img6