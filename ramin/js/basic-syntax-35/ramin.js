// add number a to b
function add(a, b) {
    return a+b;
}

/// ----------------------------------- ////

// flip a coin and log the result (head or tail)
function flipACoin() {

    let number  = Math.random();
    if(number>=0.5)
        console.log("head")
    else
        console.log("tail");

}

/// ----------------------------------- ////

// concat two strings
function concat(stringA, stringB) {
    return stringA + ' ' + stringB;
}

/// ----------------------------------- ////

// 2^x = ?
function power2(x) {
    return Math.pow(2,x);
}

/// ----------------------------------- ////

// user object with first name and last name, both capitalized
// e.g. getUser('hello', 'world') is { firstName: 'Hello', lastName: 'World' }
function getUser(firstName, lastName) {

    let uperFirstName = firstName[0].toUpperCase() + firstName.slice(1); // if firstName = Ramin => R + amin
    let uperLasttName = lastName[0].toUpperCase() + lastName.slice(1);

    return {
        firstName:uperFirstName,lastName:uperLasttName
    }
}

/// ----------------------------------- ////

// greet someone!
// e.g. greet('ConnecMent') is "Hello, ConnecMent! Hope you the best."
function greet(name) {
    console.log(`Hello, ${name}!`);
}

/// ----------------------------------- ////

// get array of n random numbers
function getNRandomNumberss(n) {
    let arrNum = [];

    for(let i=0;i<n;++i){
        arrNum.push(Math.random());
    }

    return arrNum;

}

/// ----------------------------------- ////

// get sorted array of n random numbers, in range min to max
function getNRandomNumbers(n, min, max) {

    let arrNum = []
    let rangeCount = max - min;

    for(let i=0;i<n;++i){
        arrNum.push(Math.ceil(Math.random()*rangeCount + min));
    }

    arrNum.sort();

    return arrNum;

}   

/// ----------------------------------- ////

// log current time with a x seconds interval, for n seconds
function logCurrentTime(x, n) {
    
    let count = 1;
    let date1 = new Date();
    let time = date1.toLocaleTimeString();
    console.log(time);

    let id = setInterval(function print_time(){
        let date1 = new Date();
        let time = date1.toLocaleTimeString();
        console.log(time)

        ++count;
        
        if(count === parseInt(n/x)){
            clearInterval(id);
        }

    },x*1000);

}

/// ----------------------------------- ////

// higher order function: call the function in the parameters list
// e.g. callFuncNTimes(flipACoin, 3) calls flipACoin 3 times
function callFuncNTimes(func,n,...args) {
    for(let i=0;i<n;++i){
        func(...args);
    }
}

/// ----------------------------------- ////

// return true if parameter is falsy, false otherwise
function isNil(param) {
    return !(param);
}

/// ----------------------------------- ////

// call property in object
// e.g. in obj = { callableProp: function () { console.log('hello!') } }, callPropInObj(obj, 'callableProp') will log "hello!"
function callPropInObj(object, propertyName) {
    //we want to call method
    if( typeof (object[propertyName]) === 'function'){
        object[propertyName]();
    }    
    else // we want to call property
        console.log(object[propertyName]);
}
//note : propertyName must be in a string form like 'name','callableProp'

/// ----------------------------------- ////

// if the email is gmail
function isGmail(email) {
    return email.endsWith("@gmail.com");
}

/// ----------------------------------- ////

// duplicate array
// e.g. duplicateArray([1,2,3]) is [1,2,3,1,2,3]
function duplicateArray(arr) {
    return arr.concat(arr);
}

/// ----------------------------------- ////


// E_N_D //