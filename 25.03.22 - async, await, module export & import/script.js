// console.log(1);
// fetch('https://sv443.net/jokeapi/v2/joke/Any')
// // fetch('https://sv443.net/jokea')
// .then((response) => {
//     // console.log(response)

//     return response.json()
//     // .then()
//     // .catch()
// })
// .then((result) => {
//     // console.log(result);
//     // throw new Error("Sua nahi");
//     console.log("setup - ", result ?. setup ?? "No setup") // ?? - nullish coalescing opeator
//     console.log("joke - ", result ?. joke ?? "No Joke")
// })
// .catch((err) => {
//     console.log("error :- ", err);
// })
// console.log(2);

// setTimeout()

// async, await


// const getSetupOrJoke = async function() {
//     console.log(1);
    
//     try {
//         const response = await fetch('https://sv443.net/jokeapi/v2/joke/Any')
//         console.log(response);

//         const result = await response.json();
//         console.log(result);
//     } catch(err) {
//         console.log("error is :- ", err);
//     }
//     console.log(2);
// }

// getSetupOrJoke()


// =====================================export & import keyword
export let name = "sai"; // named export
export let fullName = "Sai Pranab Patra" // named export

export default "Java Technocrat"; // default export
// export default "Java Technocrat112"; // default export