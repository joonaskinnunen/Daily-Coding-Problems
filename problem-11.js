/*
Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
*/

const setOfStrings = ['dog', 'deer', 'deal', 'dealing', 'darling', 'data', 'developer', 'car', 'dot', 'cat', 'delete']
setOfStrings.sort()
const autocomplete = (prefix, strings) => {
    const autocompWords = []
    for(let i = 0; i < strings.length; i++) {
        if(strings[i].substring(0, prefix.length) === prefix) {
            autocompWords.push(strings[i])
        }
    }
    return autocompWords
}

console.log(autocomplete('', setOfStrings))