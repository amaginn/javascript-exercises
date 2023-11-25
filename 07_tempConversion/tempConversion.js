const convertToCelsius = function(fTemp) {
  let cTemp = ((fTemp - 32) * .5556)
  let cTempRound = Math.round(cTemp * 10) / 10
  return cTempRound
};

const convertToFahrenheit = function(cTemp) {
  let fTemp = ((cTemp * 1.8) + 32)
  let fTempRound = Math.round(fTemp * 10) / 10
  return fTempRound
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
