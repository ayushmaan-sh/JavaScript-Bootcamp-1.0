// I/O (Input/Output) heavy operations refer to tasks in a computer program that involve a lot of data transfer between the program and external systems or devices. These operations usually require waiting for data to be read from or written to sources like disks, networks, databases, or other external devices, which can be time-consuming compared to in-memory computations.

// ### Examples of I/O Heavy Operations:
// 1. Reading a file
// 2. Starting a clock
// 3. HTTP Requests


const fs = require("fs");

function fileReadCallback(err, contents){
   console.log(contents)
}

fs.readFile("file.txt", "utf-8", fileReadCallback)


let s = 0
for(let i=0; i<=20; i++){
   s += 1
}

console.log(s)
