'use strict';

function Neighborhood(name, tabby, calico, maine, persian, british, siamese) {
  this.name = name;
  this.breedsValue = {
    tabby: tabby,
    calico: calico,
    maine: maine,
    persian: persian,
    british: british,
    siamese: siamese
  };
}

var tabby = 0;
var calico = 0;
var maine = 0;
var persian = 0;
var british = 0;
var siamese = 0;

//function addCat(breed) {
// 	// 	var myBreed = 
// 	// 	var catInventory[breed] += 1;
// 	// };
// 	var subtractCat = function(breed) {
// 		// var this.catInventory[breed] -= 1;
var Ballard = new Neighborhood('Ballard', 1, 2, 3, 4, 5, 6);

console.log('Ballard: ', Ballard);

// function User(name, purse) {
// 	this.username = name;
// 	// // this.catInventory = {
// 	// this.tabby = 0;
// 	// this.calico = 0;
// 	// this.maine = 0;
// 	// this.persian = 0;
// 	// this.british= 0;
// 	// this.siamese = 0;
// 	// // };
// 	// var addCat = function(breed) {
// 	// 	var catInventory[breed] += 1;
// 	// };
// 	var subtractCat = function(breed) {
// 		// var this.catInventory[breed] -= 1;
// 	}
// }

//var buy = document.getElementById('buy');
//buy.addEventListener('click', handleClick);
//function handleClick(event) {
// 	event.preventDefault();
// 	buyClick = buyClick + 1;
//};

var Bud = new User('Bud', 5000);

console.log('Bud', Bud);