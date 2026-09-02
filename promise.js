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

const fs = require("fs")

// promisified version of fs.readFile
function fsReadFilePromisified(fileName, encoding) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, encoding, function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}


fsReadFilePromisified("file.txt", "utf-8")
    .then(function (data) {
        console.log(data)
    })
    .catch(function (err) {
        console.log(err);
    })


// Promisified version of setTimeout


function setTimeoutPromisified(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve()
        }, time)
    })
}

setTimeoutPromisified(3000)
    .then(function () {
        console.log("3 seconds has been passed.")
    })


// const writeData = () =>{
//     fs.writeFile("file.txt", "Hello JS!", "utf-8", (err)=>{
//         if(err){
//             console.log("Error while writing file:", err)
//             return;
//         } else {
//             console.log("File written successfully!")
//         }
//     })
// }

// writeData()

function writeFilePromisified(fileName, content, encoding){
    return new Promise(function(resolve, reject){
        fs.writeFile(fileName, content, encoding, function(err){
            if(err){
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

writeFilePromisified("file.txt", "Hello Ayushmaan!", "utf-8")
    .then(console.log("File Written Successfully!"))
    .catch(function(err){
        console.log("Error While writing file:",err)
    })


// Assignment - Using fsReadFilePromisified and writeFilePromisified, make an new function called readAndWriteFilePromisified which reads the file first then convert the data into uppercase.

const readAndWriteFilePromisified = (fileName, encoding) => {
    return new Promise(function(resolve, reject){
        fsReadFilePromisified(fileName, encoding)
            .then(function(contents){
                contents = contents.toUpperCase()
                writeFilePromisified(fileName, contents, encoding)
                resolve()
            })
    })
}

readAndWriteFilePromisified("file.txt", "utf-8")
    .then(function(){
        console.log("Data converted to uppercase!")
    })
    .catch(function(err){
        console.log(err)
    })