// const arr1 = [1, 2, 3]
// const arr2 = [...arr1]
// console.log(arr2);

// const arr3 = [3, 4, 5]
// const mergedArr = [...arr2, ...arr3]
// console.log(mergedArr);

// const login = {
//     email : "abcd@gmail.com",
//     password : "abcd!1234"
// }

// const copyLogin = {...login}
// console.log(copyLogin);

// const copyLogin2 = {...login, id : 123}
// console.log(copyLogin2);

// const mergedObj = {...copyLogin, ...copyLogin2, email: 'jt@gmail.com'}
// console.log(mergedObj);


// const nums = [11, 21, 31]
// const obj = {...nums}
// console.log(obj); 


// =====================================server side 
// const obj2 = {
//     a : 'abcd',
//     b : 'bcd'
// }
// const arr2 = [...Object.values(obj2)]
// console.log(arr2);


// =======================Destructuring of Arrays
// let nums = [100, 200, 300]
// // console.log(nums[0]);
// let firstNum = nums[0]
// let secondNum = nums[1]
// let thirdNum = nums[2]
// console.log(firstNum, secondNum, thirdNum);

// let [a, b, c] = nums
// console.log(a, b, c)

let nums1 = [100, 200, 300, 400, 500]
let[a, b, ...others] = nums1 
console.log(a, b, others);

// let nums2 = [...nums1] // -> spread (because it extracts all the elements from nums1)
// let [...nums3] = nums1 // -> rest(it receives all the elements from nums1)
// console.log(nums2, nums3);

// function add(...elements){
//     console.log(elements);
// }

// add(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)

// ========================================Destructuring of Objects
const student = {
    roll : 101,
    name : 'Karan',
    age : 22,
    course : 'B.Tech',
    subjects : ['Java', "javascript", "Spring", "React"] 
}

// let studentRoll = student.roll
// console.log(studentRoll);
// let studentName = student.name
// console.log(studentName);

// let {roll, name} = student
// console.log(roll, name);

// let {age : studentAge} = student
// console.log(studentAge);

// let {courses = "Patha Padhu Nahi"} = student
// console.log(courses);

// // let {subjects : coreSubjects = 'FullStack Development'} = student
// let {subject : coreSubjects = 'FullStack Development'} = student
// console.log(coreSubjects);

// let {roll, ...others1} = student
// console.log(roll, others1);


/*
    Arrow functions
    return keyword in functions
    callback function
    array - map(), filter()
    object
    spread, rest
    destructuring
*/

// global scope - memory -> area (Temporal Dead Zone or TDZ -> those variables or functions (specially function expression & arrow functions) that are declared with let & const they allocate its memory in memory creation phase in the TDZ ,
    // In TDZ these variables are initialized with the value named = <value unavailable>
// )

console.log(num)
let num ;