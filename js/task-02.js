const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const itemListEl = document.querySelector('#ingredients');
const makeSup = ingredients =>{
  return ingredients.map(ingredient =>{
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    itemEl.classList.add('item');
    return itemEl;
  });
};
const ingredientsEl = makeSup(ingredients);
itemListEl.append(...ingredientsEl);