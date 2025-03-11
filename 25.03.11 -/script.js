// console.log(data); 
// var data = 10;

// let a = 20;

// sayHii()

// function sayHii() {
//     console.log("Hii everyone")

//     let name = "Sai"
// }

// Operator
// (unary operator) - (++, --, +, -, !, ~, typeof, void, delete)
// (binary operator)
    /*
        arithmetic - +, -, *, /, %, **
        assignment - =, +=, -=, *=, /=, %=, **=
        comparison - ==, === (strict equals), !=, !==, >, >=, <, <=
        logical - &&, ||, ?? (nullish coaelscing)
        bitwise - &, |, ^
    */
// ternary operator - 1st expression ? 2nd expression : 3rd expression


// console.log(5 == 5) // true
// console.log(5 != 5) // false

// console.log(5 == "5") // true - Type coercion or auto conversion
// console.log(5 === "5") // false - not only checks the value but it also the type of the value

// console.log(5 != '5') // false
// console.log(5 !== '5') // true

// // 1st-operand ?? 2nd-operand
// // 1st operand is null or undefined, it returns 2nd operand otherwise returns 1st operand
// let name = null ?? "default name"
// console.log(name)

// let num = 10 ?? 100
// console.log(num);

// let num2 = undefined ?? 120
// console.log(num2);


// -----------------------Type Conversion------------------------
// i) Type Conversion or Explicit conversion  - by the help of some built in functions
        // String() - converts a value to string
        // let num  = 42;
        // let str = String(num)
        // console.log(str)
        // console.log(typeof str)

        // console.log(23 + 18) // 41
        // console.log(String(23) + 18) // 2318

        // let boolStr = String(true)
        // console.log(boolStr, typeof boolStr);

        // // Number() - converts a value to number
        // let strNum = "123"
        // let intNum = Number(strNum)
        // console.log(intNum, typeof intNum);
        // console.log(Number('JT')); // NaN

        // // Boolean() - converts a value to boolean
        // let msg = "hello"
        // let boolValue = Boolean(msg)
        // console.log(boolValue); // true




        //ii) Type Coercion or Auto conversion - implicitely done by javascript
        // console.log("5" - 2) // 3
        // console.log("10" - 5) // 5 , "10" is coerced to a number
        // console.log("10" * "2") // 20, both are coerced to numbers

        // console.log("hello" - 5); // NaN , "hello" cannot be coerced to number
        // console.log("hello" * 2); // NaN , "hello" cannot be coerced to number
        // console.log(NaN + 1); // NaN
        // console.log(NaN - 1); // NaN
        // console.log(NaN + NaN); // NaN

        // console.log(10 + false) // 10
        // console.log(10 + true) // 11
        // console.log(10 + null) // 10
        // console.log(10 + undefined) // NaN
        
        
// # functions
    // code reusability
    
// function declaration - hoisted - before defintion we can call the function
function greet() {
    console.log('Hello World');
}
greet()

function addNumbers() {
    let a = 5;
    let b = 10;
    console.log('addition is', a + b);
}
addNumbers()

// write a function to generate random number between 1 to 6
function generateNumber() {
    let number = Math.round(Math.random() * 6)
    console.log(number);
}

generateNumber()