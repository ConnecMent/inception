// write an arrow function to add two numbers
let  add = (num1,num2) => {
    return num1 + num2;
}

// write a `greet` function, which logs `hello, {someName}!`,
//where someName is function parameter and has a default value of "ConncMent"
// use default parameter values for implementation
function greet(someName="ConncMent") {
    console.log(`hello, ${someName}!`)
}


// log any other arguments passed to the following function, without changing parameters
// e.g. foo('hello', 'world', '!') should log 'world' and '!'
function foo(bar) {    
    const [,...a] = arguments;
    console.log(a);
}


// concat two arrays using spread operator
function concatArrays(arr1, arr2) {
    return resulArray = [...arr1 , ...arr2];
}


// write a function which returns an object with the provided param as key
// use computed property names for implementation
// e.g. getObject('hello') -> { hello: 'any value' }

getObject = (key) => {
    return {
        [key]:"any value",
    }
}


// write a function which logs the first two element of the array provided as parameter
// use destructuring for implementation
// e.g. getFirstTwo([1, 2, 3, 4]) -> logs 1, 2
function getFirstTwo(someArray){
    const [y,z] = someArray;
    console.log(y,z);
}


// write a function which fetches data from the following endpoint:
// https://jsonplaceholder.typicode.com/
// just choose one api you prefer, and log the result
// use fetch api for implementation
// do not use async/await syntax for now
function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
    }).catch(function(error){
        console.log('error fetching data :',error);
    })
}

// write a function which returns a promise, that resolves after some seconds
function sleep(seconds){
    return new Promise(function(resolve,reject){
        setTimeout( resolve ,1000*seconds);
    })
}
