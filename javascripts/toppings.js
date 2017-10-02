"use strict";

const loadBread = (onBreadLoad, onToppingError) => {
	const breadLoader = new XMLHttpRequest();//in use strict mode you have to call XMLHttpRequest
	breadLoader.addEventListener('error', onToppingError);
	breadLoader.addEventListener('load', onBreadLoad);
	breadLoader.open('GET', '../data/bread.json');
	breadLoader.send();
};

const loadCheese = (onCheeseLoad, onToppingError) => {
	const cheeseLoader = new XMLHttpRequest();//in use strict mode you have to call XMLHttpRequest
	cheeseLoader.addEventListener('error', onToppingError);
	cheeseLoader.addEventListener('load', onCheeseLoad);
	cheeseLoader.open('GET', '../data/cheese.json');
	cheeseLoader.send();
};

const loadCond = (onCondLoad, onToppingError) => {
	const condLoader = new XMLHttpRequest();//in use strict mode you have to call XMLHttpRequest
	condLoader.addEventListener('error', onToppingError);
	condLoader.addEventListener('load', onCondLoad);
	condLoader.open('GET', '../data/cond.json');
	condLoader.send();
};

const loadMeat = (onMeatLoad, onToppingError) => {
	const meatLoader = new XMLHttpRequest();//in use strict mode you have to call XMLHttpRequest
	meatLoader.addEventListener('error', onToppingError);
	meatLoader.addEventListener('load', onMeatLoad);
	meatLoader.open('GET', '../data/meat.json');
	meatLoader.send();
};

const loadVeggie = (onVeggieLoad, onToppingError) => {
	const veggieLoader = new XMLHttpRequest();//in use strict mode you have to call XMLHttpRequest
	veggieLoader.addEventListener('error', onToppingError);
	veggieLoader.addEventListener('load', onVeggieLoad);
	veggieLoader.open('GET', '../data/veggie.json');
	veggieLoader.send();
};

module.exports = {loadBread,
				  loadCheese,
				  loadCond,
				  loadMeat,
				  loadVeggie};








