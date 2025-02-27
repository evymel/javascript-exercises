const fibonacci = function(position) {
    let currentValue = 1;
    let newValue = 0;
    let lastValue = 0;
    if (position == 0) {
        return 0;
    } else if (position < 0){
        return "OOPS";
    } else if (position == 1 || position == '1') {
        return 1;
    }
    else {
        for (let index = 1; index < position; index++) {
            newValue = currentValue + lastValue ; 
            lastValue = currentValue;
            currentValue = newValue;
        }
    }
    return newValue;
};
// fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6); // returns 8
//does accept string such as "4"
//does not accept negative return "OOPS "
// Do not edit below this line
module.exports = fibonacci;
