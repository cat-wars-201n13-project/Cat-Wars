'use strict';

function Neighborhood(name, tabby, calico, mainecoon, persian, british, siamese) {
  this.name = name;
  this.breedsValue = {
    tabby: tabby, // 200
    calico: calico, // 250
    mainecoon: mainecoon, // 300 
    persian: persian, // 400
    british: british, // 500
    siamese: siamese // 600
  };
}

var Ballard = new Neighborhood('Ballard', 200, 250, 300, 400, 500, 600);

console.log('Ballard: ', Ballard);

function buyCat() {
  var str = document.getElementById('selectBreed').value;
  str = str.toLowerCase();
  console.log('User chose:', str);
  Bud.catInventory[str] += 1;
  var cost = Ballard.breedsValue[str];
  console.log(cost);
  Bud.purse = Bud.purse - cost;
  console.log('Bud.purse: ', Bud.purse);
	userPurse();
	userInventory();
}

function sellCat() {
  var str = document.getElementById('selectBreed').value;
  str = str.toLowerCase();
  console.log('User chose:', str);
  Bud.catInventory[str] -= 1;
  var cost = Ballard.breedsValue[str];
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

function User(name, purse) {
  this.purse = purse;
  this.username = name;
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
