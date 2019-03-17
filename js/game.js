'use strict';

function User(username, purse) {
  this.purse = purse;
  this.username = username;
  this.catInventory = {
    tabby: 0,
    calico: 0,
    mainecoon:0,
    persian:0,
    british: 0,
    siamese: 0,
  };
}
var Bud = new User('Bud', 500);
console.log('Bud', Bud);

function Neighborhood(name, tabby, calico, mainecoon, persian, british, siamese) {
  this.name = name;
  this.breedsValue = {
    tabby: ['Tabby', tabby], // 200
    calico: ['Calico', calico], // 250
    mainecoon: ['Mainecoon', mainecoon], // 300 
    persian: ['Persian', persian], // 400
    british: ['British' + british], // 500
    siamese: ['Siamese' + siamese] // 600
  };
}
var Ballard = new Neighborhood('Ballard', 200, 250, 300, 400, 500, 600);
var QueenAnne = new Neighborhood('QueenAnne', 100, 300, 800, 500, 1200, 75);
var Downtown = new Neighborhood('Downtown', 75, 725, 100, 300, 1400, 1500);
console.log('Ballard: ', Ballard);
console.log('Queen Anne: ', QueenAnne);
console.log('Downtown: ', Downtown);

function breedValueByNeighborhood(name) {
	var x = this.breedsValue[1];
	console.log(x);
	x = JSON.stringify(x);
	console.log(x);
  document.getElementById('Tabby Value').innerHTML = x; //start here
}

function userPurse() {
	var x = Bud.purse;
	console.log(x);
  document.getElementById('purse').innerHTML = x;
}
function userInventory() {
	var x = Bud.catInventory;
	console.log(x);
	x = JSON.stringify(x);
	console.log(x);
  document.getElementById('inventory').innerHTML = x;
}

function buyCat() {
  var str = document.getElementById('selectBreed').value; //why not event.target.value?
  str = str.toLowerCase();
  console.log('User chose:', str);
  Bud.catInventory[str] += 1;
  var cost = Ballard.breedsValue[str][1]; //proper syntax?
  console.log(cost);
  Bud.purse = Bud.purse - cost;
  console.log('Bud.purse: ', Bud.purse);
	userPurse();
	userInventory();
}

function sellCat() {
  var str = document.getElementById('selectBreedToSell').value;
  str = str.toLowerCase();
  console.log('User chose:', str);
  Bud.catInventory[str] -= 1;
  var cost = Ballard.breedsValue[str][1]; //proper syntax?
  console.log(cost);
  Bud.purse = Bud.purse + cost;
  console.log('Bud.purse: ', Bud.purse);
	userPurse();
	userInventory();
}

var buyButton = document.getElementById('buycat');
buyButton.addEventListener('click', buyCat);

var sellButton = document.getElementById('sellcat');
sellButton.addEventListener('click', sellCat);