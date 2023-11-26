function add(a,b){
    return(a + b);
}

function flipACoin() {
    var random = Math.random();
    if (random > 0.5) {
        retuen("tail");
    } else if (random <= 0.5) {
        return("head");
    }
}

function concat(stringA, stringB) {
    return(stringA + stringB);
}

function power2(x) {
    return(Math.pow(2,x));
}

function getUser(firstName, lastName) {
    const FirstName=firstName.replace(firstName.charAt(0),firstName.charAt(0).toUpperCase());
    const LastName=lastName.replace(lastName.charAt(0),lastName.charAt(0).toUpperCase());
    return{FirstName, LastName};
}