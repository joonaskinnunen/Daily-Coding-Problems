/* Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass? */

const arr = [10, 7, 3, 8]
const k = 19

const result = (value) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i != j && arr[i] + arr[j] === value) {
                return true
            }
        }
    }
    return false
}

console.log(result(k))