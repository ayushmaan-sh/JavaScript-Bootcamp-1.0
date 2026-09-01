// Given an array, give me back and array in which every value is multiplied by two.
const arr1 = [1,2,3,4,5]
const arr2 = []

// Basic way

for (let i = 0; i < arr1.length; i++) {
    const e = arr1[i]*2
    arr2.push(e)
}

console.log(`Old Array :`, arr1)
console.log(`New Array :`, arr2)

// Through map way
const arr3 = [1,3,5,7,9]


console.log(arr3.map(func1 = (i) => {
    return i*2
}))



// Filter
// Given an input array, give back an new array which have only even values.

// Basic way

const numbers = [1,2,3,4,5,6,7,8,9,10]
const evenNumbers = []

for(let i=0; i < numbers.length; i++){
    if(numbers[i]%2==0){
        evenNumbers.push(numbers[i])
    }
}

console.log("Even Numbers :", evenNumbers)


// Through filter way

const ans = numbers.filter(filterLogic = (n) => {
    if(n%2==0){
        return true
    } else {
        return false
    }
})
console.log("Filtered Answer :",ans)