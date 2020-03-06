/* Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
 */

const arr = [-3, 8, -55, 12, 99, 9]

let smallestPosInt = Math.max(...arr)
let i = 0;
while(i < arr.length) {
    if(arr[i] < smallestPosInt && arr[i] > 0) {
        smallestPosInt = arr[i]
    }
    i++;
}

console.log(smallestPosInt)

let result

i = 0
while(!result) {
    console.log(!arr.includes(smallestPosInt + i))
    if(!arr.includes(smallestPosInt + i)) {
        result = smallestPosInt + i
    }
    i++
}

console.log(result)