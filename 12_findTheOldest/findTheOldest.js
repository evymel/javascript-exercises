
const findTheOldest = function(array) {
  const oldest = array.sort(function(a,b) {
    if(!a.yearOfDeath){
      a.yearOfDeath = 2025
    } 
    if(!b.yearOfDeath){
      b.yearOfDeath = 2025
    }
    const lastGuy = a.yearOfDeath - a.yearOfBirth;
    const nextGuy = b.yearOfDeath - b.yearOfBirth;
    if(lastGuy > nextGuy){
      return -1;
    } else {
      return 1;
    }
  });

  return array[0]
};



// Do not edit below this line
module.exports = findTheOldest;
