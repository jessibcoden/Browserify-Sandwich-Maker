"use strict";

const buildDomstring = (toppings) => {
		let domString = "";
		let category = Object.keys(toppings)[0];
		let toppingsArray = toppings[category]; 

		for(let i = 0; i < toppingsArray.length; i++){
			// console.log("dom loop", toppingsArray[i]);
			domString += `<input type="checkbox" class="checkbox" name="${toppingsArray[i].topping}" value="${toppingsArray[i].price}">${toppingsArray[i].topping}`;
		}

		writeToDom(domString, category);
};

	const writeToDom = (string, category) => {
			document.getElementById(category).innerHTML = string;
	};


module.exports = buildDomstring;