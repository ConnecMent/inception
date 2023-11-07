// add number a to b
function add(a, b) {
  return a + b;
}

// flip a coin and log the result (head or tail)
function flipACoin() {
  let result = Math.random();

  if (result >= 0.5) return "HEAD";
  else return "TAIL";
}

// concat two strings
function concat(stringA, stringB) {
  // return stringA + stringB;
  return stringA.concat(stringB);
}

// 2^x = ?
function power2(x) {
  // return Math.pow(2, x);
  return 2 ** x;
}

// user object with first name and last name, both capitalized
// e.g. getUser('hello', 'world') is { firstName: 'Hello', lastName: 'World' }
function getUser(firstName, lastName) {
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  const arr = { firstName: firstName, lastName: lastName };
  return arr;
}

// greet someone!
// e.g. greet('ConnecMent') is "Hello, ConnecMent! Hope you the best."
function greet(name) {
  // return "Hello, " + name + " Hope you the best.";
  return `Hello, ${name} Hope you the best.`;
}

// get array of n random numbers
function getNRandomNumbers(n) {
  const final = new Array(n).fill();

  // for (let i = 0; i < n; i++) {
  //   final[i] = Math.random();
  // }
  // return final;

  // or
  // return final.map(() => Math.random());
  // or even
  return final.map(Math.random);
}

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

// higher order function: call the function in the parameters list
// e.g. callFuncNTimes(flipACoin, 3) calls flipACoin 3 times
function callFuncNTimes(func, n, ...funcParam) {
  for (let i = 0; i < n; i++) {
    func(...funcParam);
  }
}

// return true if parameter is falsy, false otherwise
function isNil(param) {
  // return param ? false : true;
  // or
  return !param;
}

// call property in object
// e.g. in obj = { callableProp: function () { console.log('hello!') } }, callPropInObj(obj, 'callableProp') will log "hello!"
function callPropInObj(object, propertyName) {
  object[propertyName]?.();
}

// if the email is gmail
function isGmail(email) {
  // if (/@gmail\.com$/.test(email)) {
  //   return true;
  // } else return false;

  // or

  return email.endsWith("@gmail.com");
}

// duplicate array
// e.g. duplicateArray([1,2,3]) is [1,2,3,1,2,3]
function duplicateArray(arr) {
  return arr.concat(arr);
}
