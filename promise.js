// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations more effectively than traditional callback functions, providing a cleaner and more manageable way to deal with code that executes asynchronously, such as API calls, file I/O, or timers.

// A **Promise** in JavaScript is an object that represents the eventual result of an asynchronous operation — either a success (resolved) or a failure (rejected).

// It’s commonly used for things like:

// - Fetching data from an API
// - Reading files
// - Timers (`setTimeout`)
// - Database requests

// ## Promise States

// A Promise has **3 states**:

// 1. **Pending** → The operation is still running
// 2. **Fulfilled (Resolved)** → The operation completed successfully
// 3. **Rejected** → The operation failed

// Once fulfilled or rejected, the Promise is **settled** and cannot change state. 

const { rejects } = require("assert")
const fs = require("fs")

// promisified version of fs.readFile
const readFilePromisified = (fileName, encoding) => {
    return new Promise(function(resolve, reject){
        fs.readFile(fileName, encoding, function(err, content){
            if(err){
                reject()
                console.log("Error while reading data.")
                return
            } else {
                resolve(content)
            }
        })
    })
}

readFilePromisified("file.txt", "utf-8")
    .then(function(content){
        console.log(content)
    })
    .catch(function(err){
        console.log(err)
    })

const writeFilePromisified = (fileName, content, encoding) => {
    return new Promise(function(resolve, reject){
        fs.writeFile(fileName, content, encoding, function(err){
            if(err){
                reject()
                console.log("Error while writing file!")
                return;
            } else {
                resolve()
            }
        })
    })
}

writeFilePromisified("file.txt", "Hello Ayushmaan", "utf-8")
    .then(console.log("File written!"))
    .catch(function(err){
        console.log(err)
    })