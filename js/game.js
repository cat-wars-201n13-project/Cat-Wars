'use strict';

function User(username, purse) {
  var today = new Date();
  this.playDate = `${today.getMonth() + 1}` + '/' + `${today.getDate()}` + '/' + `${today.getFullYear()}`;
  this.purse = purse;
  this.username = username;
  this.neighborhood = 0;
  this.catInventory = {
    tabby: 0,
    calico: 0,
    mainecoon:0,
    persian:0,
    british: 0,
    siamese: 0,
  };
}
var Player = new User('Mike', 500);
console.log('Player', Player);
userPurse();

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
    if(document.getElementById(catBreeds[i] + 'Price')) {
      tdEl = document.getElementById(catBreeds[i] + 'Price');
    } else {
      var tdEl = document.createElement('td'); //make a td cell
      tdEl.id = catBreeds[i] + 'Price';
    }
    tdEl.textContent = ' ' + catPrices[i]; //add text to the td cell you just created
    trEl.appendChild(tdEl); //append the td cell to the tr row

    var header = document.getElementById('neighborhood');
    header.textContent = arrayOfNeighborhoods[Player.neighborhood].name;
  }
}
breedValueByNeighborhood(Player.neighborhood);


function breedQuantityToSellByUser(Player) {
  for (var i = 0; i < catBreeds.length; i++) { //how do I check all properties in the object?
  
    var trEl = document.getElementById(catBreeds[i] + 'Row'); //get the option row
    if(document.getElementById(catBreeds[i] + 'Quantity')) {
      tdEl = document.getElementById(catBreeds[i] + 'Quantity');
    } else {
      var tdEl = document.createElement('td'); //make a td cell

      tdEl.id = catBreeds[i] + 'Quantity';
    }
    tdEl.textContent = ' ' + Player.catInventory[catBreeds[i].toLowerCase()]; //add text to the td cell you just created //start here
    trEl.appendChild(tdEl); //append the td cell to the tr row
  }
}
breedQuantityToSellByUser(Player);

//rewrite dynamically, do last
function userPurse() {
  var x = Player.purse;
  console.log(x);
  document.getElementById('purse').innerHTML = x;
}
//rewrite dynamically, do last
function userInventory() {
  var x = Player.catInventory;
  console.log(x);
  x = JSON.stringify(x);
  console.log(x);
  document.getElementById('inventory').innerHTML = x;
}

function buyCat() {
  //var str = document.getElementById('selectBreed').value; //why not event.target.value?
  var str = document.getElementById('selectBreed').value; //how do I separate breed from value?
  str = str.toLowerCase(); 
  console.log('User chose:', str); // str is defined as "tabby 200" 

  var breedName = str.split(' ')[0];
  var cost = +(str.split(' ')[1]);
  Player.catInventory[breedName.toLowerCase()] += 1;
  //var cost = Ballard.breedsValue[str][1];
  //if , need random function
  //var cost = arrayOfNeighborhoods[0].breedsValue[amount]; 
  console.log(cost);
  Player.purse = Player.purse - cost;
  console.log('Player.purse: ', Player.purse);
  userPurse();
  userInventory();
  breedQuantityToSellByUser(Player);
}

function sellCat() {
  var str = document.getElementById('selectBreedToSell').value; 
  str = str.toLowerCase(); 
  console.log('User chose:', str);
 
  var breedName = str.split(' ')[0];
  var quantityCats = +(str.split(' ')[1]);
  if(quantityCats > 0) {
    Player.catInventory[breedName] -= 1;
   
    var cost = arrayOfNeighborhoods[Player.neighborhood].breedsValue[breedName][1];
    // str = str.charAt(0).toUpperCase() + str.slice(1);

    console.log(cost);
    Player.purse = Player.purse + cost;
    console.log('Player.purse: ', Player.purse);
    userPurse();
    userInventory();
    breedQuantityToSellByUser(Player);
  }
}

function changeNeighborhood() {
  var randomNeighborhood = Math.floor(Math.random() * arrayOfNeighborhoods.length);
  while (randomNeighborhood === Player.neighborhood) {
    randomNeighborhood = Math.floor(Math.random() * arrayOfNeighborhoods.length);
  }
  Player.neighborhood = randomNeighborhood;
  breedValueByNeighborhood(Player.neighborhood);
  breedQuantityToSellByUser(Player);
}

var buyButton = document.getElementById('buycat');
buyButton.addEventListener('click', buyCat);

var sellButton = document.getElementById('sellcat');
sellButton.addEventListener('click', sellCat);

var scootButton = document.getElementById('changeNeighborhood');
scootButton.addEventListener('click', changeNeighborhood);
