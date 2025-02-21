const convertToCelsius = function(tempInFahr) {
  let tempInCel = ( tempInFahr - 32) * ( 5 / 9 );
  return Number(tempInCel.toFixed(1));

};

const convertToFahrenheit = function(tempInCel) {
  let tempInFahr = ( tempInCel * ( 9 / 5 )) + 32;
  return Number(tempInFahr.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
