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
userPurse();

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

//for in loop to check all properties in the Ballard Neighborhood object

function breedValueByNeighborhood() {
  var x = Ballard.breedsValue.tabby[1];
  var y = Ballard.breedsValue.calico[1];
  var z = Ballard.breedsValue.mainecoon[1];
  var xx = Ballard.breedsValue.persian[1];
  var yy = Ballard.breedsValue.british[1];
  var zz = Ballard.breedsValue.siamese[1];

	console.log('This is breed value', x);
	x = JSON.stringify(x);
	console.log(x);
  // document.getElementById('Tabby Value').innerHTML = x; //not displaying
  var trEl = document.getElementById('optionTabby'); //get the option row
  var tdEl = document.createElement('td'); //make a td cell
  tdEl.textContent = ' ' + x; //add text to the td cell you just created
  trEl.appendChild(tdEl); //append the td cell to the tr row

	y = JSON.stringify(y);
 
  var trEl = document.getElementById('optionCalico'); //get the option row
  var tdEl = document.createElement('td'); //make a td cell
  tdEl.textContent = ' ' + y; //add text to the td cell you just created
  trEl.appendChild(tdEl); //append the td cell to the tr row

  z = JSON.stringify(z);
 
  var trEl = document.getElementById('optionMainecoon'); //get the option row
  var tdEl = document.createElement('td'); //make a td cell
  tdEl.textContent = ' ' + z; //add text to the td cell you just created
  trEl.appendChild(tdEl); //append the td cell to the tr row

  xx = JSON.stringify(xx);
 
  var trEl = document.getElementById('optionPersian'); //get the option row
  var tdEl = document.createElement('td'); //make a td cell
  tdEl.textContent = ' ' + xx; //add text to the td cell you just created
  trEl.appendChild(tdEl); //append the td cell to the tr row

  console.log('This is breed value', yy);
	yy = JSON.stringify(yy);
	console.log(yy);
 
  var trEl = document.getElementById('optionBritish'); //get the option row
  var tdEl = document.createElement('td'); //make a td cell
  tdEl.textContent = ' ' + yy; //add text to the td cell you just created
  trEl.appendChild(tdEl); //append the td cell to the tr row

  zz = JSON.stringify(zz);
 
  var trEl = document.getElementById('optionSiamese'); //get the option row
  var tdEl = document.createElement('td'); //make a td cell
  tdEl.textContent = ' ' + zz; //add text to the td cell you just created
  trEl.appendChild(tdEl); //append the td cell to the tr row
}
breedValueByNeighborhood();

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