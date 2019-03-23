'use strict';

const gameData = {
  finalScores: [],
  leaderboard: {
    firstPlace: ['ALF', '9/22/1986', '$100,000'],
    secondPlace: ['-', '-', '-'],
    thirdPlace: ['-', '-', '-'],
    fourthPlace: ['-', '-', '-']},
  userData: {
    purse: 0,
    userName: '',
    date: '',
  }
};

function saveDataTolocalStorage() {
  var dataString = JSON.stringify(gameData);
  localStorage.setItem('gameData', dataString);
  console.log(dataString);
}

function storePlayerName (event) {
  event.preventDefault();
  var x = document.getElementById('PlayerName').value;
  gameData.userData.userName = x;
  saveDataTolocalStorage();
  console.log(gameData);
  window.location.href = 'pages/game.html';
}

var submitButton = document.getElementById('NameButton');

submitButton.addEventListener('click', storePlayerName);
