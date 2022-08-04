"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let obj = document.getElementById('ingredients')

const elements = ingredients.map(options => {
const newCatergorieItem = document.createElement(`li`);
  newCatergorieItem.classList.add(`item`);
  newCatergorieItem.textContent = options;
  
  return newCatergorieItem;
})

obj.append(...elements);


console.log(obj);
// console.log(obj.children);
// console.log(elements.map( h=> h.textContent ));

