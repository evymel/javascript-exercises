const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array){
  let sumOfAllNums = array.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
  return sumOfAllNums;
	
};

const multiply = function(array) {
  let productOfAllNums = array.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
  return productOfAllNums;
};


const power = function(a, b) {
  let val = a;
  if ( b == 0 ){
    return 1;

  } else if ( b == 1 ){
    return a;

  } else{
   for (let index = 2; index <= b; index++) {
    val = val * a;
   } 
   return val;
  }

};



const factorial = function(n) {
  let val = 1;
  if(n == 0) {
    return 1;

  } else{
    for (let index = n; index >= 1; index--) {
      val = val * index ;
    }
    return val;
  }

};



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
