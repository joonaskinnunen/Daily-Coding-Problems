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