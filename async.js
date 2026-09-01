function greet(){
    console.log("Hello")
}

setTimeout(greet, 5000) //Calling the function after 5 seconds.


for(let i=0; i < 10; i++){
    console.log(i)
}

// Untill the greet function will be called, for loop will run. setTimeout is an async function, so it will not make the for loop to wait and print 0-9 numbers.
// The thread moves forward towards for loop untill the setTimeout is running.