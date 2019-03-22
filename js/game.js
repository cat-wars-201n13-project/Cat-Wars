'use strict';

function User(username, purse) {
  var today = new Date();
  this.playDate = `${today.getMonth() + 1}` + '/' + `${today.getDate()}` + '/' + `${today.getFullYear()}`;
  this.purse = purse;
  this.username = username;
  this.neighborhood = 0;
  this.clicks = 5;
  this.daysLeft = 7;
  this.catInventory = {
    tabby: 0,
    calico: 0,
    mainecoon:0,
    persian:0,
    british: 0,
    siamese: 0,
  };
}

// var x = localStorage.getItem('home.username');
var x = JSON.parse(localStorage.playerName);
var Player = new User (x, 500);

console.log('Player', Player);
// userPurse();
// displayPlayer(Player); //hard-coded, update last

function displayPlayer() {

  
  breedValueByNeighborhood(Player.neighborhood); //calls the function we just made, starting with the Players current neighborhood
  breedQuantityToSellByUser(Player);
}
// var submitButton = document.getElementById('playerSubmit');
// console.log(submitButton);
// submitButton.addEventListener('submit', displayPlayer);

function Neighborhood(name, tabby, calico, mainecoon, persian, british, siamese) {
  this.name = name;
  this.breedsValue = {
    tabby: ['Tabby', tabby], // 200
    calico: ['Calico', calico], // 250
    mainecoon: ['Mainecoon', mainecoon], // 300
    persian: ['Persian', persian], // 400
    british: ['British', british], // 500
    siamese: ['Siamese', siamese] // 600
  };
}

var Ballard = new Neighborhood('Ballard', 200, 250, 300, 400, 500, 600);
var QueenAnne = new Neighborhood('QueenAnne', 100, 300, 800, 500, 1200, 75);
var Downtown = new Neighborhood('Downtown', 75, 725, 100, 300, 1400, 1500);

console.log('Ballard: ', Ballard);
console.log('Queen Anne: ', QueenAnne);
console.log('Downtown: ', Downtown);

var arrayOfNeighborhoods = [Ballard, QueenAnne, Downtown];
var catBreeds = ['Tabby', 'Calico', 'Mainecoon', 'Persian', 'British', 'Siamese'];
var catPrices = [0, 0, 0, 0, 0, 0];

//for in loop to check all properties in the Ballard Neighborhood object

function breedValueByNeighborhood(arrayOfNeighborhoodsIndex) {

  catPrices[0] = arrayOfNeighborhoods[arrayOfNeighborhoodsIndex].breedsValue.tabby[1];
  catPrices[1] = arrayOfNeighborhoods[arrayOfNeighborhoodsIndex].breedsValue.calico[1];
  catPrices[2] = arrayOfNeighborhoods[arrayOfNeighborhoodsIndex].breedsValue.mainecoon[1];
  catPrices[3] = arrayOfNeighborhoods[arrayOfNeighborhoodsIndex].breedsValue.persian[1];
  catPrices[4] = arrayOfNeighborhoods[arrayOfNeighborhoodsIndex].breedsValue.british[1];
  catPrices[5] = arrayOfNeighborhoods[arrayOfNeighborhoodsIndex].breedsValue.siamese[1];

  for (var i = 0; i < catBreeds.length; i++) {
    // debugger;
    var trEl = document.getElementById('option' + catBreeds[i]); //get the option row
    if(document.getElementById(catBreeds[i] + 'Price')) { //this checks to see if this exists. It won't exist the first time the page loads.
      tdEl = document.getElementById(catBreeds[i] + 'Price');
    } else {
      var tdEl = document.createElement('td'); //make a td cell
      tdEl.id = catBreeds[i] + 'Price'; //add an id to the td cell
    }
    tdEl.textContent = ' ' + catPrices[i]; //add text to the td cell you just created
    trEl.appendChild(tdEl); //append the td cell to the tr row

    var header = document.getElementById('neighborhood'); //grabs the neighborhood element
    header.textContent = arrayOfNeighborhoods[Player.neighborhood].name; //updates the name of the neighborhood the player is in
  }
}
// breedValueByNeighborhood(Player.neighborhood); //calls the function we just made, starting with the Players current neighborhood


function breedQuantityToSellByUser(Player) {
  for (var i = 0; i < catBreeds.length; i++) { 
    var trEl = document.getElementById(catBreeds[i] + 'Row'); //get the option row
    if(document.getElementById(catBreeds[i] + 'Quantity')) { //if the td cell exists, replace its value
      tdEl = document.getElementById(catBreeds[i] + 'Quantity');
    } else {
      var tdEl = document.createElement('td'); //if the td cell does not exist, make a td cell
      tdEl.id = catBreeds[i] + 'Quantity'; //set the id for the td cell you just made
    }
    tdEl.textContent = ' ' + Player.catInventory[catBreeds[i].toLowerCase()]; //add text to the td cell you just created 
    trEl.appendChild(tdEl); //append the td cell to the tr row
  }
  document.getElementById('DATally').textContent = Player.clicks;
  document.getElementById('DLTally').textContent = Player.daysLeft;
  document.getElementById('playerName').textContent = Player.username;
}
// breedQuantityToSellByUser(Player);

function userPurse() {
  var x = Player.purse;
  console.log(x);
  document.getElementById('purse').innerHTML = x;
}

function userInventory() {
  var x = Player.catInventory; //grabs catInventory breed values from the Player object
  console.log(x);
  x = JSON.stringify(x); //turns those values into a string
  console.log(x);
  document.getElementById('inventory').innerHTML = x; //sets the innerHTML value to x
}

function buyCat() {

  var str = document.getElementById('selectBreed').value; //grabs the value of the selected breed
  str = str.toLowerCase(); //lowercases the resulting string
  console.log('User chose:', str); // str is defined as a string: "tabby 200" 

  var breedName = str.split(' ')[0]; //splits the string at the space and sets the first group of text to the variable breedName
  var cost = +(str.split(' ')[1]); //splits the string at the space and sets the second group of text to the variable cost. The space plus turns the value into an integer
  Player.catInventory[breedName.toLowerCase()] += 1;

  console.log(cost);
  Player.purse = Player.purse - cost;
  console.log('Player.purse: ', Player.purse);

  Player.clicks = Player.clicks - 1; //if buyCat is called, subtract from tally while tally is less than 5  

  userPurse();
  userInventory();
  breedQuantityToSellByUser(Player);

  if (Player.clicks === 0) {
    changeNeighborhood();
  }  
}

function sellCat() {
  var str = document.getElementById('selectBreedToSell').value; 
  str = str.toLowerCase(); 
  console.log('User chose:', str);
 
  var breedName = str.split(' ')[0]; //splits the str string, grabs resulting item at 0 position
  var quantityCats = +(str.split(' ')[1]); //splits the str string, grabs resulting item at 1 position and turns it into an integer
  if(quantityCats > 0) {
    Player.catInventory[breedName] -= 1;
   
    var cost = arrayOfNeighborhoods[Player.neighborhood].breedsValue[breedName][1];
    // str = str.charAt(0).toUpperCase() + str.slice(1); //Old code

    console.log(cost);
    Player.purse = Player.purse + cost;
    console.log('Player.purse: ', Player.purse);

    Player.clicks = Player.clicks - 1;
    
    userPurse();
    userInventory();
    breedQuantityToSellByUser(Player);
  }
  if (Player.clicks === 0) {
    changeNeighborhood(); 
  }  
}

function changeNeighborhood() {
  var randomNeighborhood = Math.floor(Math.random() * arrayOfNeighborhoods.length);
  while (randomNeighborhood === Player.neighborhood) {
    randomNeighborhood = Math.floor(Math.random() * arrayOfNeighborhoods.length);
  }
  Player.neighborhood = randomNeighborhood;
  breedValueByNeighborhood(Player.neighborhood);
  Player.clicks = 5; 
  Player.daysLeft = Player.daysLeft - 1;
  if(Player.daysLeft === 0) {
    endGame();
  }
  breedQuantityToSellByUser(Player);
}

function endGame() {
  if (Player.purse >= 5000) {
    alert('You win!');
  } else {
    alert('Wah, wah! You lose.');
  }
  window.location.href = "../pages/leaderboard.html";
}

var buyButton = document.getElementById('buycat');
buyButton.addEventListener('click', buyCat);

var sellButton = document.getElementById('sellcat');
sellButton.addEventListener('click', sellCat);

var scootButton = document.getElementById('changeNeighborhood');
scootButton.addEventListener('click', changeNeighborhood);

displayPlayer();


