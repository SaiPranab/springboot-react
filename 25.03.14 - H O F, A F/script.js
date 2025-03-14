// Higher Order functions
// - When a function takes one or more functions(callback functions) as an argument or returns a function 
// let hii = function() {
//     console.log('hii');
// }

// let greet = function() { // anonymous function
//     console.log('hello');
// }

// greet()
// greet()
// greet()

// for(let i = 1; i <= 10; i++){
//     greet()
// }

// for(let i = 1; i <= 10; i++){
//     hii()
// }


// ----------- Higher Order function takes functions as an arguement
// let hii = function() {
//     console.log('hii Everyone');
// }

// let greet = function() { // anonymous function
//     console.log('hello');
// }
// let multipleGreet = function (func) {
//     // console.log(func);
//     // func()

//     for(let i = 1; i <= 10; i++){
//         // hii()
//         // greet()

//         func()
//     }
// }

// multipleGreet(hii) // multipleGreet HigherOrderFunction & hii callback function
// multipleGreet(greet) // multipleGreet HigherOrderfunction & greet is the callback function

// // let num = 10;
// // multipleGreet(num)


// Higher Order function returns a function
// let checkOddEven = function (request) {
//     if(request === "even"){
//         // console.log("even");

//         let evenFunc = function() {
//             console.log("Even function called")
//             // return 10;
//         }
//         // return evenFunc()
//         return evenFunc
//     }
//     else if (request === "odd") {
//         // console.log("Odd");

//         let oddFunc = function() {
//             console.log("Odd function called")
//         }
//         return oddFunc
//     } else {
//         console.log(request);
//         console.log("Invalid request");
//     }
// }

// // checkOddEven() // 
// // checkOddEven(true)
// let returningFunc = checkOddEven("even")
// // let returningFunc = checkOddEven("odd")
// console.log(returningFunc);


// setTimeout(callBackFunc, timer)
// - The callbackFunc which u have provided in the arguement 
//                              it only gets executed after the timer ends

const handleTimeout = function () {
    console.log("Time out !!!")
}
// handleTimeout = 10

const handleTimeout2 = function () {
    console.log("Timed out again !!!")
}

setTimeout(handleTimeout, 3000)
setTimeout(handleTimeout2, 1000)

console.log('hello');
