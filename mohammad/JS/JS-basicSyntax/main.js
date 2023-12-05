// add number a to b
function add(a, b) {
  return a + b;
}

// flip a coin and log the result (head or tail)
function flipACoin() {
  if (Math.random() < 0.5) console.log("head");
  else console.log("tail");
}

// concat two strings
function concat(stringA, stringB) {
  return stringA + stringB;
}

// 2^x = ?
function power2(x) {
  return 2 ** x;
}

// user object with first name and last name, both capitalized
// e.g. getUser('hello', 'world') is { firstName: 'Hello', lastName: 'World' }
function getUser(firstName, lastName) {
  firstName = firstName[0].toUpperCase() + firstName.slice(1);
  lastName = lastName[0].toUpperCase() + lastName.slice(1);
  let user = { firstName: firstName, lastNAme: lastName };
  return user;
}

// greet someone!
// e.g. greet('ConnecMent') is "Hello, ConnecMent! Hope you the best."
function greet(name) {
  let str = "Hello, " + name + "! Hope you the best.";
  //let str = `Hello, ${name} Hope you the best.`;
  //let str="Hello, $name! Hope you the best."
  return str;
}

// get array of n random numbers
function getNRandomNumbers(n) {
  let arr = [];
  for (let i = 0; i < n; i++) arr[i] = Math.random();
  return arr;
}

// get sorted array of n random numbers, in range min to max
function getNRandomNumbers(n, min, max) {
  let arr = [];
  for (let i = 0; i < n; i++) arr[i] = Math.random() * (max - min) + min;
  arr.sort();
  return arr;
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

    console.log(date.toLocaleTimeString());
  }
}

// higher order function: call the function in the parameters list
// e.g. callFuncNTimes(flipACoin, 3) calls flipACoin 3 times
function callFuncNTimes(func, n) {
  for (let i = 0; i < n; i++) func();
}

// return true if parameter is falsy, false otherwise
function isNil(param) {
  return !param;
}

// call property in object
// e.g. in obj = { callableProp: function () { console.log('hello!') } }, callPropInObj(obj, 'callableProp') will log "hello!"
function callPropInObj(object, propertyName) {
  if (typeof object[propertyName] === "function") {
    object[propertyName]();
  }
}

// if the email is gmail
function isGmail(email) {
  return email.endsWith("@gmail.com");
}

// duplicate array
// e.g. duplicateArray([1,2,3]) is [1,2,3,1,2,3]
function duplicateArray(arr) {
  return arr.concat(arr);
}
