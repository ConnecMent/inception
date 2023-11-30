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
    return(stringA.concat('', stringA, stringB));
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

//Not functioning
function logCurrentTime(x, n) {
    for (let i = 0; i <= Math.floor(n/x); i++) {
      setTimeout(() => { console.log('Time:'+ Date()); }, i * x * 1000);
    }
  }
  
  

function callFuncNTimes(flipACoin) {
    let count = 0;
    for(let i = 0; i < 3; i++){
        if (flipACoin()==='head'){
            count++;
        }
    }
    if (count <= 2){
        console.log("heads won!");
    }
    else {
        console.log("tails won!");
    }
}

  //couldn't undrestand what we needs
function isNil(param) {
    return !param;
  }

  //couldn't undrestand what we need
  function callPropInObj(object, propertyName) {
    object[propertyName]();
  }
  

function isGmail(email) {
    const searchTerm = "@Gmail.com";
    if (email.includes(searchTerm)) {
        return true;
      } else {
        return false;
      }
}

function duplicateArray() {
    let fruits = ['Apple', 'Orange', 'Strawberry'];
    let duplicatedFruits = fruits;
    for (let x in fruits) {
      duplicatedFruits.push(fruits[x]);
    }
    console.log(duplicatedFruits);
  }
 