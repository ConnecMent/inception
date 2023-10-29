// add number a to b
function add(a, b) {
  return a + b;
}

//! test add func
console.log("add 1 to 1:", add(1, 1));

// flip a coin and log the result (head or tail)
function flipACoin() {
  let result = Math.random();

  if (result >= 0.5) return "HEAD";
  else return "TAIL";
}

//! test flipACoin func
console.log("flipACoin:", flipACoin());

// concat two strings
function concat(stringA, stringB) {
  return stringA + stringB;
}

//! Test concat func
console.log("concat: ", concat("abc", "def"));

// 2^x = ?
function power2(x) {
  let final = 1;
  for (let i = 0; i < x; i++) {
    final *= 2;
  }

  return final;
}

//! test power2 func
console.log("power2 of 10:", power2(10));

// user object with first name and last name, both capitalized
// e.g. getUser('hello', 'world') is { firstName: 'Hello', lastName: 'World' }
function getUser(firstName, lastName) {}

// greet someone!
// e.g. greet('ConnecMent') is "Hello, ConnecMent! Hope you the best."
function greet(name) {
  return "Hello, " + name + " Hope you the best.";
}

//! test greet func
console.log("Greet:", greet("Mr MRF"));

// get array of n random numbers
function getNRandomNumbers(n) {}

// get sorted array of n random numbers, in range min to max
function getNRandomNumbers(n, min, max) {}

// log current time with a x seconds interval, for n seconds
function logCurrentTime(x, n) {}

// higher order function: call the function in the parameters list
// e.g. callFuncNTimes(flipACoin, 3) calls flipACoin 3 times
function callFuncNTimes(func) {}

// return true if parameter is falsy, false otherwise
function isNil(param) {}

// call property in object
// e.g. in obj = { callableProp: function () { console.log('hello!') } }, callPropInObj(obj, 'callableProp') will log "hello!"
function callPropInObj(object, propertyName) {}

// if the email is gmail
function isGmail(email) {}

// duplicate array
// e.g. duplicateArray([1,2,3]) is [1,2,3,1,2,3]
function duplicateArray() {}
