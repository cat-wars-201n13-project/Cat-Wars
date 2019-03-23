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

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var theTable = document.getElementById('best_table');
console.log('table, ', theTable);
var totalPerHour = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(totalPerHour);
var allShops = [];

function CookieStore(name, minHourlyCust, maxHourlyCust, avgCookiesSoldPerCust, id) {
  this.name = name;
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.avgCookiesSoldPerCust = avgCookiesSoldPerCust;
  this.custPerHour = [];
  this.avgCookiesSoldPerHour = [];
  this.totalDailySales = 0;
  this.id = id;
  this.calcRandNumCustPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.custPerHour.push(random(this.minHourlyCust, this.maxHourlyCust));
    }
  };
  this.calcAvgCookiesSoldHour = function(){
    this.calcRandNumCustPerHour();
    console.log('custperhour',this.custPerHour);
    console.log('avg thing,', this.avgCookiesSoldPerCust);

    for (var i = 0; i < hours.length; i++) {
      var avgCookiesSoldThisHour = Math.floor(this.custPerHour[i] * this.avgCookiesSoldPerCust);

      this.avgCookiesSoldPerHour.push(avgCookiesSoldThisHour);
      this.totalDailySales += avgCookiesSoldThisHour;
    }
    console.log('avgscookies soldperhour, ', this.avgCookiesSoldPerHour);
  };
  allShops.push(this);
}
console.log(CookieStore);

CookieStore.prototype.render = function() {
  this.calcAvgCookiesSoldHour();

  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');

  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  for (var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.avgCookiesSoldPerHour[i];
    trEl.appendChild(tdEl);
  }
  var thEl = document.createElement('th');
  thEl.textContent = this.totalDailySales;
  trEl.appendChild(thEl);
  theTable.appendChild(trEl);
};

function totalThisHour() { //when do we call?
  // console.log('allShops, ', allShops);
  for (var i = 0; i < allShops.length; i++){ //i represents specific shop name in the array
    // console.log(allShops[i]);
    for (var j = 0; j < allShops[i].avgCookiesSoldPerHour.length; j++) {
      // console.log('cookies list',allShops[i].avgCookiesSoldPerHour[j]);
      totalPerHour[j] += allShops[i].avgCookiesSoldPerHour[j];
      console.log('bp wrote this totalPerHour', totalPerHour[j]);
      console.log('bp wrote this 2 allShops[i].avgCookiesSoldPerHour', allShops[i].avgCookiesSoldPerHour[j]);
      console.log('bp wrote this 3 allShops[i]', allShops[i]);
    }
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(random);

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Locations';
  trEl.appendChild(thEl);

  for(var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Location Totals';
  trEl.appendChild(thEl);
  theTable.appendChild(trEl);
}
console.log(makeHeaderRow);

//new stuff as of Saturday 2.23.19
function makeFooterRow() {
  var trEl = document.createElement('tr'); //make a tr row
  trEl.setAttribute('id', 'the-footer');
  var thEl = document.createElement('th'); //make a th cell
  thEl.textContent = 'Hourly Totals for all locations'; //add text to the th cell you just created
  trEl.appendChild(thEl); //append the th cell to the tr row

  var totalOfTotals = 0; //we need two running totals! total of all hours from all locations
  var hourlyTotal = 0; //total for specified hour, combining all locations

  for (var i = 0; i < hours.length; i++) {
    hourlyTotal = 0;
    for (var j = 0; j < allShops.length; j++) {
      hourlyTotal += allShops[j].avgCookiesSoldPerHour[i]; //at first iteration, adds Pike 6am total to 0; when j repeats, adds SeaTac 6am to previous value for new hourlyTotal
      totalOfTotals += allShops[j].avgCookiesSoldPerHour[i]; //adds Pike 6am total to 0/total tally; then loops back to line above.
    }
    thEl = document.createElement('th');
    thEl.textContent = hourlyTotal;
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = totalOfTotals;
  trEl.appendChild(thEl);
  theTable.appendChild(trEl);
}
console.log(makeFooterRow);

makeHeaderRow();
new CookieStore('First and Pike', 23, 65, 6.3, 'firstandpike');

new CookieStore('Seatac', 3, 24, 1.2, 'seatac');

new CookieStore('Seattle Center', 11, 38, 3.7, 'scenter');

new CookieStore('Capitol Hill', 20, 38, 2.3, 'chill');

new CookieStore('Alki', 2, 16, 2.6, 'alki');

//var fremontStore = new CookieStore('Fremont', 2, 6, 4, 'fremont'); //need this function for form

//var allShops = [pikeStore, seatacStore, scenterStore, chillStore, alkiStore]; //need to push value from form

(function renderTable() {
 
  console.log(makeHeaderRow);
  for (var i = 0; i < allShops.length; i++){
    allShops[i].render();
    
    console.log('allShops', allShops[i]);
  }
  totalThisHour();
  console.log(totalThisHour);
 
  console.log(renderTable);
})();
makeFooterRow();
//redefine var
var newStoreForm = document.getElementById('new-store-form');
var formProperties = [];

function handleSubmit(event) { //the function to react to the event
  event.preventDefault(); //says hey, don't open in a new browser
  document.getElementById('the-footer').remove();
  var enteredName = event.target.name.value;  //puts the name value in a variable
  var enteredMin = event.target.minHourlyCust.value;  //puts the min value in a variable
  var enteredMax = event.target.maxHourlyCust.value; //puts the max value in a variable
  var enteredAvg = event.target.avgCookiesSoldPerCust.value; // pust the avg in a variable
  var enteredId = event.target.name.value; //puts the id in a variable

  var newStoreFromForm = new CookieStore(enteredName, parseInt(enteredMin), parseInt(enteredMax), parseInt(enteredAvg), enteredId); //this is a new object
  allShops.push(newStoreFromForm);
  newStoreFromForm.render(); //?

  event.target.name.value = null;  //this sets the new object's name object value to no value
  event.target.minHourlyCust.value = null;
  event.target.maxHourlyCust.value = null;
  event.target.avgCookiesSoldPerCust.value = null;
  //event.target.id.value = null;
  formProperties.unshift(newStoreFromForm);
  makeFooterRow();
}

newStoreForm.addEventListener('submit', handleSubmit, false);
