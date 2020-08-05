/* Given an array of integers, write a function to determine whether the array could become non-decreasing by modifying at most 1 element.

For example, given the array [10, 5, 7], you should return true, since we can modify the 10 into a 1 to make the array non-decreasing.

Given the array [10, 5, 1], you should return false, since we can't modify any one element to get a non-decreasing array. */

const couldBecomeNonDec = (arr) => {
    let matches = 0
    for(let i = 1; i < arr.length; i++) {
        arr[i] < arr[i - 1] && matches++
    }
    return matches < 2
}

console.log(couldBecomeNonDec([5, 5, 7, 9, 11, 11, 12, 6])) // returns true