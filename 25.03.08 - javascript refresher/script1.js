// "" or '' or `` (template literal)

let name = 'java technocrat'
console.log(typeof name)

console.log(name[0]) // j
console.log(name[5]) // t
console.log(name[10]) // o
console.log(name[15]) // index cross the range undefined
console.log(name.length) // 15

let name1 = "hii 'sahil'"
console.log(name1) // hii 'sahil'

let name2 = 'hii "jyoti"'
console.log(name2)

// string merge
console.log("hello " + 5 + 6) // hello56 -> concatenation
console.log(5 + 6 + "hello") // 11hello -> addition
console.log(5 + 6 + 'A' + "hello") // 11Ahello
console.log("hello" + 5 , 6 , 'A') // hello56A

// template literal
let pencilPrice = 10;
let erasorPrice = 20;

console.log("The total price is ", pencilPrice + erasorPrice, " rupees");

let total1 = "The total price is " + (pencilPrice + erasorPrice) + " rupees"
console.log(total1)

let total2 = `The total price is ${pencilPrice + erasorPrice} rupees`;
console.log(total2)

// -------------------------
let str1 = 'hello'
let str2 = 'world'

console.log(`${str1 + " " + str2}`)
console.log(`${str1} ${str2}`)