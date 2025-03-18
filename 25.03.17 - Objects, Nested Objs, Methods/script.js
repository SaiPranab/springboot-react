// new constructor()

// 3 ways to create an Object
// i) Object literal
// [ ] - array symbol

// { 
//      key : value 
// } - object symbol
// const person = {
//     firstName : 'Sahil' ,
//     lastName : 'Patra' ,
//     age : 30 ,
//     salary : 70000.99
// }
// console.log(person);


// // ii) by new keyword
// const car = new Object()
// car.company = "Toyota"
// car.model = 'Fortuner'
// car.modelYear = 2025
// console.log(car);


// // iii) constructor function
// function employee(id, name, salary) {
//     this.id = id;
//     this.name = name
//     this.salary = salary
// }

// const emp1 = new employee(101, 'Amiya', 30000.99)
// console.log(emp1);


// ======================object literal =======================
// let post = {
//     username : 'jt_sai',
//     content : 'This is your SpringBoot - React Course',
//     likes : 30,
//     reposts : 10,
//     tags : ["jt", "springboot", "react", "web developemnt"]
// }
// console.log(post);

// // accessing values from object
// console.log(post.likes);
// console.log(post["username"]);

// let repo = "reposts"
// console.log(post.repo); // undefined
// console.log(post[repo]); // 10

// // update, add, delete
// post.likes = 200
// console.log(post.likes);

// console.log(post.dislikes);
// post.dislikes = 11
// console.log(post.dislikes);
// console.log(post);

// delete post.dislikes
// console.log(post);


// =============================Nested Objects
// const employees = {
//     emp1 : {
//         id : 101,
//         username : "Biswajit",
//         department : "IT"
//     },

//     emp2 : {
//         id : 102,
//         username : "Jyoti",
//         department : "Finance" 
//     },

//     emp3 : {
//         id : 103,
//         username : 'admin',
//         department : "HR"
//     }
// }

// console.log(employees);
// console.log(employees.emp2);
// console.log(employees.emp2.id);
// console.log(employees.emp3.department);
// employees.emp3.city = "BBSR"
// console.log(employees.emp3);

// ==============================Methods
// let calculator = {
//     num : 30,

//     add : function(a, b) {
//         console.log("addition is ", a+b)
//     },

//     sub : function x(a, b) {
//         console.log("substraction is ", a-b)
//     },

//     mul: (a, b) => console.log("Multiplication is ", a * b) ,

//     div(a, b) {
//         console.log("division is ", a / b);
//     }
// }

// console.log(calculator);
// console.log(calculator.num);
// console.log(calculator.add);
// console.log(calculator.add(10, 20));
// console.log(calculator.x);
// console.log(calculator.sub(10, 20));
// console.log(calculator.mul(10, 20));
// console.log(calculator.div(10, 20));


// =============================Array of Objects
const employees = [
    {
        id: 101,
        username: "Biswajit",
        department: "IT"
    },

    {
        id: 102,
        username: "Jyoti",
        department: "Finance"
    },

    {
        id: 103,
        username: 'admin',
        department: "HR"
    }
]

console.log(employees);
console.log(employees[1]);
console.log(employees[1].department);
employees[1].gender = 'M'
console.log(employees[1]);

