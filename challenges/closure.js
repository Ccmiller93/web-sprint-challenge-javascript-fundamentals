// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


// const external = "I'm outside the function";

// function myFunction() {
//   console.log(external);
//   const internal = "Hello! I'm inside myFunction!";

//   function nestedFunction() {
//     console.log(internal);
//   };
//   nestedFunction();
// }
// myFunction();

// Explanation: 

// parent/child inhearitence(spelling).... functions and methods are passed down, and nested functions have access to internal variables 

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

// loop that takes x and minus 1 = y
// takes that y and adds it to x

function summation(param) {
  counter = 0;
  let returnValue = 0;

  function addToParam(param) {
    while (counter <= param) {
      returnValue += counter
      counter++
    }
    return returnValue
  }
  return addToParam(param)
}
console.log(summation(4))