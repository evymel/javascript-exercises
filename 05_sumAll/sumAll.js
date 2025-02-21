const sumAll = function(startInteger, endInteger) {
    let sum = 0 ;
    //this solves quite a lot of nifty things
    if (Number.isInteger(startInteger) === false ||  Number.isInteger(endInteger) === false) {return 'ERROR'}
    

    else if (startInteger <= endInteger && startInteger > 0 && endInteger > 0) {
        for (let index = startInteger; index <= endInteger; index++) {
            sum = sum + index
        }
        return sum ;

    } else if (startInteger > endInteger && startInteger > 0 && endInteger > 0) {
        for (let index = endInteger; index <= startInteger; index++) {
            sum = sum + index
        }
        return sum ;
    } else {return 'ERROR'}



};

// Do not edit below this line
module.exports = sumAll;
