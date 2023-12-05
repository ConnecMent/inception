// get array of n random numbers
export function getNRandomNumberss(n) {
    let arrNum = [];

    for(let i=0;i<n;++i){
        arrNum.push(Math.random());
    }

    return arrNum;

}

/// ----------------------------------- ////

// get sorted array of n random numbers, in range min to max
export function getNRandomNumbers(n, min, max) {

    let arrNum = []
    let rangeCount = max - min;

    for(let i=0;i<n;++i){
        arrNum.push(Math.ceil(Math.random()*rangeCount + min));
    }

    arrNum.sort();

    return arrNum;

}   
