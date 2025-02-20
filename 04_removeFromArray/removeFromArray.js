// ...argsToRemove is called "rest parameters" we don't know how many args there would be, possibily even zero! 

//this only works for 2/8 cases
//const removeFromArray = function(array,...argsToRemove) {
//    let newArray = [];
//    for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
//        for (let index = 0; index < argsToRemove.length; index++) {
//            if (array[arrayIndex] == argsToRemove[index]) { 
//                break;
//            }
//            else {
//                newArray.push(array[arrayIndex])
//            }
//        }
//
//    }
//    return newArray;
//
//}


const removeFromArray = function(array,...argsToRemove) {
    let newArray = [];
    for (let index = 0; index < argsToRemove.length; index++) {
        for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
            if (array[arrayIndex] === argsToRemove[index]) { 
                delete array[arrayIndex];
            }
        }
    }
    
    for (let index = 0; index < array.length; index++) {
        if (array[index] != undefined ) {
            newArray.push(array[index]);
        }
        
    }

    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;










