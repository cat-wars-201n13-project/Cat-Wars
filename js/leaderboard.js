'use strict';

var gameData = getDatafromlocalStorage();
console.log(gameData);

function saveDataTolocalStorage() {
  var dataString = JSON.stringify(gameData);
  localStorage.setItem('gameData', dataString);
  console.log(dataString);
}

function getDatafromlocalStorage() {
  var retrievedData = localStorage.getItem('gameData');
  var retrievedDataParsed = JSON.parse(retrievedData);
  console.log(retrievedDataParsed);

  return retrievedDataParsed;
}

function showPlayerScore() {
  var showScore = `Your Score: ${gameData.userData.purse}`;
  document.getElementById('playerscore').innerHTML = showScore;
}

showPlayerScore();


