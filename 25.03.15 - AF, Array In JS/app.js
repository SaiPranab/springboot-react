// int a[] = {10, 20, 30}
// String[] = new String[] {"a", "b", "c"}

// Array In JS
let fruits = ['Apple', 'Orange', 'Mango']

fruits.push("Banana") // add the element in the last index
console.log(fruits);

fruits.pop() // removes the last element
console.log(fruits);

fruits.unshift('Banana') // add the element in the first index
console.log(fruits);

fruits.shift() // removes the first element
console.log(fruits);

console.log(fruits.indexOf('Orange'))
console.log(fruits.indexOf('Orange1'))

console.log(fruits.includes('Orange'))
console.log(fruits.includes('Orange1'))

let fruits2 = ['Pineapple', 'Grapes']
let moreFruits = fruits.concat(fruits2)
console.log(moreFruits);

fruits.reverse()
console.log(fruits);