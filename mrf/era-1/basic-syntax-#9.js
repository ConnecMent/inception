// add number a to b
function add(a, b) {
  return a + b;
}

//! test add func
console.assert(add(1, 1) === 2, { a: 1, b: 1, function: add.name });

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
  // return stringA + stringB;
  return stringA.concat(stringB);
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
function getUser(firstName, lastName) {
  const arr = { firstName: firstName, lastName: lastName };
  return arr;
}

//! test getUser function
console.log("getUser whami:", getUser("mmd", "mmdi"));

// greet someone!
// e.g. greet('ConnecMent') is "Hello, ConnecMent! Hope you the best."
function greet(name) {
  return "Hello, " + name + " Hope you the best.";
}

//! test greet func
console.log("Greet:", greet("Mr MRF"));

// get array of n random numbers
function getNRandomNumbers(n) {
  const final = new Array();

  for (let i = 0; i < n; i++) {
    let x = Math.random();
    final.push(x);
  }

  return final;
}

//! test of getNRandomNumbers
console.log("getNRandomNumbers: 10", getNRandomNumbers(10));

// get sorted array of n random numbers, in range min to max
function getNRandomNumbersRange(n, min, max) {
  const final = new Array();

  for (let i = 0; i < n; i++) {
    // plus 1 to included max
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    final.push(x);
  }

  return final;
}

//! test of getNRandomNumbersRange
console.log(
  "getNRandomNumbersRange: 10, 5, 15",
  getNRandomNumbersRange(10, 5, 15)
);

// log current time with a x seconds interval, for n seconds
function logCurrentTime(x, n) {
  function printTime() {
    let date = new Date();
    console.log(
      "Time:",
      date.getHours(),
      ":",
      date.getMinutes(),
      ":",
      date.getSeconds()
    );
  }

  // setTimeout(printTime, x * 1000);

  for (let i = 0; i < n / x; i++) {
    printTime();

    let time1 = new Date().getTime() / 1000;
    let time2 = new Date().getTime() / 1000;

    while (time1 + x > time2) {
      time2 = new Date().getTime() / 1000;
    }
  }
}

//! test of logCurrentTime
logCurrentTime(2, 10);

// higher order function: call the function in the parameters list
// e.g. callFuncNTimes(flipACoin, 3) calls flipACoin 3 times
function callFuncNTimes(func, n, ...funcParam) {
  for (let i = 0; i < n; i++) {
    console.log(func(funcParam));
  }

  return "done";
}

//! Test callFuncNTimes
console.log("callFuncNTimes: ", callFuncNTimes(flipACoin, 3));
console.log("callFuncNTimes: ", callFuncNTimes(getNRandomNumbers, 3, 4));

// return true if parameter is falsy, false otherwise
function isNil(param) {
  return param ? false : true;
}

//! test of isNil
console.log("isNil:", isNil(0x0));
console.log("isNil:", isNil(0));
console.log("isNil:", isNil(0.0));
console.log("isNil:", isNil(false));
console.log("isNil:", isNil(""));
console.log("isNil:", isNil("MRF"));

// call property in object
// e.g. in obj = { callableProp: function () { console.log('hello!') } }, callPropInObj(obj, 'callableProp') will log "hello!"
function callPropInObj(object, propertyName) {
  object[propertyName]();
}

//! test callpropinobj
const obj = {
  callableProp: function () {
    console.log("hello!");
  },
};
callPropInObj(obj, "callableProp");

// if the email is gmail
function isGmail(email) {
  if (/@gmail\.com$/.test(email)) {
    return "Valid Gmail";
  } else return "unValid Gmail";
}

//! test isGmail
console.log(isGmail("mmd.com"));
console.log(isGmail("mmd@ggg.com"));
console.log(isGmail("mmd@gmail.com"));

// duplicate array
// e.g. duplicateArray([1,2,3]) is [1,2,3,1,2,3]
function duplicateArray(arr) {
  return arr.concat(arr);
}

//! test duplicateArray
console.log(duplicateArray([1, 2, 3]));
