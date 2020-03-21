/*
Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
*/

const f = () => {
    console.log("Function called")
}

const jobScheduler = (f, n) => {
    setTimeout(f, n)
}

jobScheduler(f, 5000)