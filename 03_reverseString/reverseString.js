const reverseString = function(string) {
    let len = string.length;
    let revStr = '';
    const arrayOfString = string.split("");
    if (string = ''){ return '';
    }
    else {
        for (let index = len-1; index >= 0; index--) {
            revStr += arrayOfString[index];
        }
        return revStr;
    }
};

// Do not edit below this line
module.exports = reverseString;
