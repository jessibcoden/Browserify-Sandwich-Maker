"use strict";

const printToDom = require('./dom'); //pulls function from dom.js
const loadToppings = require('./toppings'); //pull function from toppings.js

// let toppingsArray = []; //declare globally so it can be called in multiple functions

const errorFunction = () => {
	console.log("Way to go, dumbass!!");
};

//When gifs load
const whenToppingsLoad = function(){ //must use function keyword for json parsing
	let toppings = {};
	toppings = JSON.parse(this.responseText);
	//Load categories
	printToDom(toppings);
};

loadToppings.loadBread(whenToppingsLoad, errorFunction);
loadToppings.loadCheese(whenToppingsLoad, errorFunction);
loadToppings.loadCond(whenToppingsLoad, errorFunction);
loadToppings.loadMeat(whenToppingsLoad, errorFunction);
loadToppings.loadVeggie(whenToppingsLoad, errorFunction);

module.exports = {};


