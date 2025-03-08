console.log("Hello JS")

// primitve data type => number, string, boolean, undefined, null
// reference data type => object, array, function (method)

let a = 10;
// console.log(a)
console.log(typeof a); // number

let name = "bishal"
console.log(typeof name)

let b = true
console.log(typeof b)

let c;
console.log(c)
console.log(typeof c)

let person = null; // it represents the absence of any Object
console.log(person);
console.log(typeof person);

let employee = {
    name : 'Tamanna'
} // object literal
console.log(employee)
console.log(typeof employee)

let arr = [1, 2, 3]
console.log(arr)
console.log(typeof arr)

function showMessage(){
    console.log("Hello Everyone")
    console.log("I hope you're enjoying the class")

    // return 10
}
showMessage()

console.log(showMessage)    // showMessage -> function -> printing address
console.log(showMessage())  // function calling

console.log(typeof showMessage)

function hii() {
    console.log('hello arpita')
}
console.log(hii)