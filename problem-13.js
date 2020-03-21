/*
Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".
*/

const getLongestSubstring = (s, k) => {
    let longestSubstring = ''
    let i = 0
    let x = i + k
    while (x < s.length) {
        let substring = s.substring(i, x)
        let foundSubstring = ''
        for (let j = 0; j < s.length; j++) {
            if (substring.includes(s.charAt(j))) {
                foundSubstring = foundSubstring.concat(s.charAt(j))
                if (foundSubstring.length > longestSubstring.length) {
                    longestSubstring = foundSubstring
                }
            } else {
                foundSubstring = ''
            }
        }
        i++
        x++
    }
    return longestSubstring
}

console.log(getLongestSubstring('abcbahllhalr', 3))