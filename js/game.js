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
  }
}
breedValueByNeighborhood(0);

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


//start here; check str and .value
function buyCat() {
  var str = document.getElementById('selectBreed').value; //why not event.target.value?
  str = str.toLowerCase();
  console.log('User chose:', str);
  Bud.catInventory[str] += 1;
  //var cost = Ballard.breedsValue[str][1];
  //if , need random function
  // var cost = arrayOfNeighborhoods[0].breedsValue[str][1]; //why won't this work?
  console.log(cost);
  Bud.purse = Bud.purse - cost;
  console.log('Bud.purse: ', Bud.purse);
  userPurse();
  userInventory();
}

function sellCat() {
  var str = document.getElementById('selectBreedToSell').value; //using the str variable as not a string
  str = str.toLowerCase(); //try making this a unique variable so that I can use the str variable as a string
  console.log('User chose:', str);
  Bud.catInventory[str] -= 1;
  var cost = Ballard.breedsValue[str][1];
  //var cost = arrayOfNeighborhoods[0].breedsValue[str][1]; //why won't this work?
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
