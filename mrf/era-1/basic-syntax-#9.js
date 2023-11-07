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
  // return Math.pow(2, x);
  return 2 ** x;
}

//! test power2 func
console.log("power2 of 10:", power2(10));

// user object with first name and last name, both capitalized
// e.g. getUser('hello', 'world') is { firstName: 'Hello', lastName: 'World' }
function getUser(firstName, lastName) {
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  const arr = { firstName: firstName, lastName: lastName };
  return arr;
}

//! test getUser function
console.log("getUser whami:", getUser("mmd", "mmdi"));

// greet someone!
// e.g. greet('ConnecMent') is "Hello, ConnecMent! Hope you the best."
function greet(name) {
  // return "Hello, " + name + " Hope you the best.";
  return `Hello, ${name} Hope you the best.`;
}

//! test greet func
console.log("Greet:", greet("Mr MRF"));

// get array of n random numbers
function getNRandomNumbers(n) {
  const final = new Array(n).fill();

  // for (let i = 0; i < n; i++) {
  //   final[i] = Math.random();
  // }
  // return final;

  // or
  return final.map(() => Math.random());
  // or even
  return final.map(Math.random);
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
  let startTime = new Date().getTime() / 1000;

  let ID = setInterval(printTime, x * 1000);

  function printTime() {
    let date = new Date();

    if (startTime + n + 1 < date.getTime() / 1000) {
      clearInterval(ID);
      return;
    }

    console.log(
      "Time:",
      date.getHours(),
      ":",
      date.getMinutes(),
      ":",
      date.getSeconds()
    );
  }
}

//! test of logCurrentTime
logCurrentTime(2, 10);

// higher order function: call the function in the parameters list
// e.g. callFuncNTimes(flipACoin, 3) calls flipACoin 3 times
function callFuncNTimes(func, n, ...funcParam) {
  for (let i = 0; i < n; i++) {
    func(...funcParam);
  }
}

//! Test callFuncNTimes
callFuncNTimes(() => {
  console.log(flipACoin());
}, 3);

// return true if parameter is falsy, false otherwise
function isNil(param) {
  // return param ? false : true;
  // or
  return !param;
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
  object[propertyName]?.();
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
  // if (/@gmail\.com$/.test(email)) {
  //   return true;
  // } else return false;

  // or

  return email.endsWith("@gmail.com");
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
