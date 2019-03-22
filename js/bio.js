'use strict'

var changeOne = document.getElementById("becky")
  changeOne.addEventListener("mouseover", changeBecky); 
  function changeBecky (event) {
    changeOne.src="../img/british-shorthair-cats-and-kittens-5.jpg"
  }

  changeOne.addEventListener("mouseout", function (event) {
    changeOne.src="../img/becky_headshot_cat_wars.png"
  });

var changeTwo = document.getElementById("daniel")
  changeTwo.addEventListener("mouseover", changeDaniel); 
  function changeDaniel (event) {
    changeTwo.src="../img/heavy-breathing.jpg"
  }

  changeTwo.addEventListener("mouseout", function (event) {
    changeTwo.src="../img/Daniel Bio Pic.jpeg"
  });

var changeThree = document.getElementById("aaron")
  changeThree.addEventListener("mouseover", changeAaron); 
  function changeAaron (event) {
    changeThree.src="../img/c71cf96a3f8e526560f13e4bad899c46--funny-animals-funny-cats.jpg"
  }

  changeThree.addEventListener("mouseout", function (event) {
    changeThree.src="../img/aaron_head_shot.jpg"
  });

var changeFour = document.getElementById("leonard")
  changeFour.addEventListener("mouseover", changeLeonard); 
  function changeLeonard (event) {
    changeFour.src="../img/4a83e87f9ace0ef0e1a6beae1e54c6dd.jpg"
  }

  changeFour.addEventListener("mouseout", function (event) {
    changeFour.src="../img/headshot.jpg"
  });