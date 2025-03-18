// forEach() - This method executes a callback function once for each element
// let arr = [1, 2, 3, 4, 5]

// function print(element) {
//     console.log("print function executed by forEach method");
//     console.log(element);
// }
// arr.forEach(print)

// const arrowPrint = a => console.log(a)
// arr.forEach(arrowPrint)

// arr.forEach(a => console.log(a))
// // or
// arr.forEach((a) => {
//     console.log(a)
// })

// ============================map method
// map() -> map method creates a new array with the results of caling a callback function on every element of the array
// let arr = [1, 2, 3, 4, 5]

// let doubleArr = arr.map((n) => {
//     console.log('this function is executed by map method ', n);
//     return n * 2;
// })
// console.log(arr);
// console.log(doubleArr);

// const sqrArr = arr.map(n => n * n)
// console.log(sqrArr);

// const ans = arr.map(n => {})
// console.log(ans);

// let students = [
//     { name: "sai", marks: 60 },
//     { name: "raj", marks: 90 },
//     { name: "aakash", marks: 95 },
// ]
// const cgpa = students.map(s => s.marks / 10)
// console.log(cgpa);

// ================================filter method
// filter() - method creates a new array with the elements that pass the test implemented by the callback function
// like forEach, map it also executes the callback function once for each element
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const evens = nums.filter(n => {
//     console.log('this function is executed by filter () ', n);
//     return n % 2 === 0
// })
// console.log(evens);

// const ans = nums.filter(el => el > 5)
// console.log(ans);

// ================================every method
// every() - tests whether all the elements in the array pass the test implemented by the callback function or not
// const nums = [2, 4, 6, 8, 10]
// let isEvens = nums.every(el => {
//     console.log('this function is executed by every () ', el);
//     return el % 2 == 0
// })
// console.log(isEvens);

// const nums1 = [1, 3, 5, 7, 10]
// let isOdds = nums1.every(el => el % 2 !== 0)
// console.log(isOdds);

// =============================some
// const nums = [2, 4, 6, 8, 9]
// let atleastOneOdd = nums.some(el => el % 2 !== 0)
// console.log(atleastOneOdd);








// ===============================================================spread operator
// spread operator is used to expands an iterable (like string, array, object) into individual elements
// it is used to spread elements for function arguements, copy arrays, merge arrays, copy objects, merge objects
// ... -> var-arg (varied arguements)

// function add(a, b, c) {
//     console.log('addition is', a + b + c);
// }

// // add(10, 20, 30)
// let nums = [40, 50, 60]
// // add(nums[0], nums[1], nums[2])

// console.log(...nums);
// console.log(...'javatechnocrat');
// add(...nums)

// const arr = [10, 20, 30, 40, 50]
// console.log(arr[0], arr[1], arr[2], arr[3], arr[4]);
// console.log(...arr);
// console.log(..."javascript");
// console.log(..."rashmi sir");

// let add = (a, b, c, d, e) => a + b + c + d + e 
// console.log(add(...arr));
// console.log(add(10, 20, 30, 40, 50));

const arr1 = [100, 200, 300]
// const arr2 = [];
// for(let i = 0; i < arr1.length; i++){
//     arr2[i] = arr1[i]
// }
// console.log(arr2);

const copyArr1 = [...arr1];
console.log(copyArr1);

const chars = [..."javtechnocrat"]
console.log(chars)

const chars1 = {..."javtechnocrat"}
console.log(chars1)