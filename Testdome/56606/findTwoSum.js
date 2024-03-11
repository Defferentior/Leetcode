/**
 * @param {number[]} numbers The array of numbers.
 * @param {number} sum The required target sum.
 * @return {number[]} An array of 2 indices. The indices of the two elements whose sum is equal to sum.
 */
function findTwoSum(numbers, sum) {
    let indexDict = {};

    for ( let i = 0; i < numbers.length; i++ ) {
        let num = numbers[i];
        let complement = sum - num;

        if ( indexDict[complement] !== undefined ) {
            return [indexDict[complement], i];
        }

        indexDict[num] = i;
    }

    // Your code goes here
  }
  
  const indices = findTwoSum([ 3, 1, 5, 7, 5, 9, 8, 2, 2, 5, 8 ], 10);
  console.log(indices); // [3, 4]