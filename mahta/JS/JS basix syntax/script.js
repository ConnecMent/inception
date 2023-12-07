function add(a,b){
    return(a + b);
}

function flipACoin() {
    var random = Math.random();
    if (random > 0.5) {
        retuen("tail");
    } else {
        return("head");
    }
}

function concat(stringA, stringB) {
    return(stringA.concat(stringA, stringB));
}

function power2(x) {
    return(2**x);
}

function getUser(firstName, lastName) {
    const FirstName=firstName.replace(firstName.charAt(0),firstName.charAt(0).toUpperCase());
    const LastName=lastName.replace(lastName.charAt(0),lastName.charAt(0).toUpperCase());
    return{FirstName, LastName};
}

function greet(name) {
    console.log(`Hi ${name}, nice to meet you!`)
}

function getNRandomNumbers(n) {
    let random_numbers=[];
    for (i = 0; i < n; i++){
        random_numbers.push(Math.random()*1000);
    }
    return random_numbers;
}

function getNRandomNumbers(n, min, max) {
    let random_numbers=[];
    for (i = 0; i < n; i++){
        random_numbers.push(Math.random()*(max-min)+min);
    }
    return random_numbers;   
}

function logCurrentTime(x, n) { 
    let counter = 0;
    const intervalId = setInterval(() => {
      console.log('Time: ' + new Date());
      counter++;
      if (counter === Math.floor(n / x)) {
        clearInterval(intervalId);
      }
    }, x * 1000);
  }


  function callFuncNTimes(func, n, ...funcParams) {
    for (let i = 0; i < n; i++) {
      func(...funcParams);
    }
  }


function isNil(param) {
    return !param;
  }

  function callPropInObj(object, propertyName) {
    object?.[propertyName]?.();
}

function isGmail(email) {
    if (email.endsWith("@isGmail.com")) {
        return true;
      } else {
        return false;
      }
}

function duplicateArray() {
    let fruits = ['Apple', 'Orange', 'Strawberry'];
    fruits = fruits.concat(fruits);
    return fruits;
  }
  