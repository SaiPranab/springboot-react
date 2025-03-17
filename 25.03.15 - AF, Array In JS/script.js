// function sum1(a, b) {
//     console.log('function declaration ', (a+b));
// }

// const sum2 = function (a, b){
//     console.log('function expression ', (a+b));
// }

// const sum3 = (a, b) => {
//     console.log('arrow function ', (a+b));
// }

// sum1(10, 20)
// sum2(100, 200)
// sum3(1000, 2000)

// ----------------
console.log('enter js file');

let square = function (a) {
    return a * a;
}
console.log(square(10))

// let square2 = (b) => {
//     return b * b
// }
// console.log(square2(3));

// let square3 = c => c * c // implict return in arrow function
// console.log(square3(5));

// const hello = () => {
//     console.log('Hello world');
// }

// hello()
// console.log(hello)
// =============================================================
let count = 0;

const f1 = () => {
    console.log("Hello JS");
    console.log("setInterval calling this function in each interval");
    count++;

    if(count === 5){
        clearInterval(intervals)
    }
}

// setTimeout( f1 , 10000)

let intervals = setInterval(f1, 1000)

