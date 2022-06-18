// function hasTargetSum(array, target) {
//   // Write your algorithm here

function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const NumberAfterMinus = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === NumberAfterMinus) return true;
    }
  }

  return false;
}
/*
  Given an array and a target.
  Loop through the array, and again nest another array inside of it looping from the element in the second index.
  If the element in the first index and the second index  add up to our target then return true.
  Otherwise continue the loop untill you land on the elements that equate to our target.



/* 
  Write the Big O time complexity of your function here
  0(n*2)
*/

/* 
  Add your pseudocode here
*/
/* Loop through the array and nest another loop this time starting from the second element of the same array.
If the first element of the outer loop compare to the second element of the inner loop by adding to our target number return true
Otherwise return false till the condition is satisfied
 */

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
