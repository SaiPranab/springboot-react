// console.log("hii");


// ===========================JSON (Javascript Object Notation)
// - is just like javascript object but in json keys are also encoded with double quote

// const student = {
//     id : 101,
//     name : "Varun",
//     subjects : ['c', 'c++', 'java', 'js']
// }
// console.log(student);

// let json = '{"fact": ' + 
//     ' "Cats make about 100 different sounds. Dogs make only about 10. Arpita","length":62}'
// console.log(json.fact);

// let obj = JSON.parse(json) //through parse() it converts the json object into js object
// let {fact} = obj
// console.log(fact);

// const student = { // js object
//     id : 101,
//     name : "Varun",
//     subjects : ['c', 'c++', 'java', 'js']
// }
// let json1 = JSON.stringify(student) // through stringify() we can convert the js Obj into json obj
// console.log(json1);






// fetch() function
// let data = fetch('https://catfact.ninja/fact') // fetch() returns a Promise object - 3 states 
//     // pending
//     // fulfilled
//     // rejected
// console.log(1, data);

// data.then((resp) => {
//     console.log(2, resp); // returns a Response Object or ReadableStream object

//     let jsonObj = resp.json() // through json() we convert the Response object into json object //json() return promise
//     console.log(3, jsonObj);
    
//     jsonObj.then((result) => {
//         console.log(4, result);
//     })
//     jsonObj.catch((err) => {

//     })
// })
// data.catch((err) => {
//     console.log(5, err);    
// })


// fetch("https://catfact.ninja/fact")
// .then((res) => { // returns a Response Object
//     return res.json() // json() return a promise & if the promise get fulfilled it will return me the actual data
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log("error ", err);
// })


// multiple
fetch('https://catfact.ninja/fact')
.then((res) => {
    return res.json()
})
.then((fact1) => {
    console.log(1, fact1);
    return fetch('https://catfact.ninja/fact')
})
.then((res) => {
    return res.json()
})
.then((fact2) => {
    console.log(2, fact2);
    return fetch('https://catfact.ninja/fact')
})
.then((res) => {
    return res.json()
})
.then((fact3) => {
    console.log(3, fact3);
})
.catch((err)=> {
    console.log("err", err);
})