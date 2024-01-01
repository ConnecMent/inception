// add number a to b
function add(a, b) {
  return a + b;
}

// flip a coin and log the result (head or tail)
function flipACoin() {
  let num = Math.floor(Math.random() * 2);

  switch (num) {
    case 0:
      return "head";
    case 1:
      return "tail";
  }
}

// concat two strings
function concat(stringA, stringB) {
  return stringA.concat(stringB);
}

// 2^x = ?
function power2(x) {
  return 2 ** x;
}

// user object with first name and last name, both capitalized
// e.g. getUser('hello', 'world') is { firstName: 'Hello', lastName: 'World' }
function getUser(firstName, lastName) {
  firstName = firstName
    .slice(0, 1)
    .toUpperCase()
    .concat(firstName.slice(1).toLowerCase());
  lastName = lastName
    .slice(0, 1)
    .toUpperCase()
    .concat(lastName.slice(1).toLowerCase());
  return { firstName, lastName };
}

// greet someone!
// e.g. greet('ConnecMent') is "Hello, ConnecMent! Hope you the best."
function greet(name) {
  return "Hello, ".concat(name, "! Hope you the best.");
}

// get array of n random numbers
function getNRandomNumbers(n) {
  const resultArr = [];
  for (let i = 0; i < n; i++) {
    resultArr[i] = Math.floor(Math.random() * 100);
  }

  return resultArr;
}

// get sorted array of n random numbers, in range min to max
function getNRandomNumbers(n, min, max) {
  const resultArr = [];
  for (let i = 0; i < n; i++) {
    resultArr[i] = Math.floor(Math.random() * (max - min) + min);
  }

  return resultArr.sort();
}

// log current time with a x seconds interval, for n seconds
function logCurrentTime(x, n) {
  let counter = 0;
  let intervalID = setInterval(() => {
    console.log("Time: " + new Date());
    counter++;
    if (counter === Math.floor(n / x)) {
      clearInterval(intervalID);
    }
  }, x * 1000);
}

// higher order function: call the function in the parameters list
// e.g. callFuncNTimes(flipACoin, 3) calls flipACoin 3 times
function callFuncNTimes(func, n, ...funcParams) {
  for (let i = 0; i < n; i++) {
    func(...funcParams);
  }
}

// return true if parameter is false, false otherwise
function isNil(param) {
  // if (param == true) {
  //   return false;
  // } else {
  return !param;
}

// call property in object
// e.g. in obj = { callableProp: function () { console.log('hello!') } }, callPropInObj(obj, 'callableProp') will log "hello!"
function callPropInObj(object, propertyName) {
  object?.[propertyName]?.();
}

// if the email is gmail
function isGmail(email) {
  if (email.match(/@gmail.com/i) == null) {
    return false;
  } else {
    return true;
  }
}

// duplicate array
// e.g. duplicateArray([1,2,3]) is [1,2,3,1,2,3]
function duplicateArray(Arr) {
  Arr = Arr.concat(Arr);
  return Arr;
}

logCurrentTime(3, 2);
