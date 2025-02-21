const leapYears = function(year) {
    let isLeapYear = false;
    if ( year % 400 == 0) { 
        isLeapYear = true 
        return isLeapYear;
    }
    else if ( year % 100 == 0 ) {
        isLeapYear = false 
        return isLeapYear;
    }
    else if ( year % 4 == 0 ) { 
        isLeapYear = true
        return isLeapYear;
    } else { return isLeapYear; }



    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;


//> Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
//>- use an `if` statement and `&&` to make sure all the conditions are met properly
