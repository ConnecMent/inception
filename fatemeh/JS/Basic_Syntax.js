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
  return x * x;
}

// user object with first name and last name, both capitalized
// e.g. getUser('hello', 'world') is { firstName: 'Hello', lastName: 'World' }
function getUser(firstName, lastName) {
  const newFirstName = firstName
    .slice(0, 1)
    .toUpperCase()
    .concat(firstName.slice(1).toLowerCase());
  const newLastName = lastName
    .slice(0, 1)
    .toUpperCase()
    .concat(lastName.slice(1).toLowerCase());

  return newFirstName, newLastName;
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

  return resultArr;
}

// log current time with a x seconds interval, for n seconds
function logCurrentTime(x, n) {
  let counter = 0;
  let intervalID = setInterval(() => {
    if (counter == n) {
      clearInterval(intervalID);
    } else {
      console.log(Date());
      counter += 1;
    }
  }, x * 1000); //this sets the speed of the animation
}

// higher order function: call the function in the parameters list
// e.g. callFuncNTimes(flipACoin, 3) calls flipACoin 3 times
function callFuncNTimes(func, n) {
  for (let i = 0; i < n; i++) {
    func(n);
  }
}

// return true if parameter is false, false otherwise
function isNil(param) {
  if (param == true) {
    return true;
  } else {
    return false;
  }
}

// call property in object
// e.g. in obj = { callableProp: function () { console.log('hello!') } }, callPropInObj(obj, 'callableProp') will log "hello!"
function callPropInObj(object, propertyName) {
  object[propertyName]();
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
  let n = Arr.length;
  for (let i = 0; i < n; i++) {
    Arr.push(Arr[i]);
  }
}
