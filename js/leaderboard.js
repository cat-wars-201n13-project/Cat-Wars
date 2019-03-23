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

function showAlfData() {
  document.getElementById('1stplacename').innerHTML = gameData.leaderboard.firstPlace[0];
  document.getElementById('1stplacedate').innerHTML = gameData.leaderboard.firstPlace[1];
  document.getElementById('1stplacescore').innerHTML = gameData.leaderboard.firstPlace[2];
}

function show2ndPlace() {
  document.getElementById('2stplacename').innerHTML = gameData.leaderboard.secondPlace[0];
  document.getElementById('2stplacedate').innerHTML = gameData.leaderboard.secondPlace[1];
  document.getElementById('2stplacescore').innerHTML = gameData.leaderboard.secondPlace[2];
}

function show3ndPlace() {
  document.getElementById('3stplacename').innerHTML = gameData.leaderboard.thirdPlace[0];
  document.getElementById('3stplacedate').innerHTML = gameData.leaderboard.thirdPlace[1];
  document.getElementById('3stplacescore').innerHTML = gameData.leaderboard.thirdPlace[2];
}

function show4ndPlace() {
  document.getElementById('4stplacename').innerHTML = gameData.leaderboard.fourthPlace[0];
  document.getElementById('4stplacedate').innerHTML = gameData.leaderboard.fourthPlace[1];
  document.getElementById('4stplacescore').innerHTML = gameData.leaderboard.fourthPlace[2];
}

showAlfData();
show2ndPlace();
show3ndPlace();
show4ndPlace();



