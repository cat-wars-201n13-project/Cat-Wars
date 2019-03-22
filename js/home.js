'use strict';

function storePlayerName (event) {
  event.preventDefault();
  var x = document.getElementById('PlayerName').value;
  localStorage.setItem('playerName', JSON.stringify(x));
  window.location.href = 'pages/game.html';
}

var submitButton = document.getElementById('NameButton');

submitButton.addEventListener('click', storePlayerName);
