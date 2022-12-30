const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('ul');

const result = ingredients.map(ingredient => {

  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;
  itemRef.classList.add('item');
  itemRef.style.listStyle = 'none';

  return itemRef;
});

listRef.append(...result);
console.log(listRef);


/* Variant with a function */

// const makeIngredientsList = ingredients => {

//   const result = ingredients.map(ingredient => {

//     const itemRef = document.createElement('li');
//     itemRef.textContent = ingredient;
//     itemRef.classList.add('item');
//     itemRef.style.listStyle = 'none';

//     return itemRef;
//   });

//   listRef.append(...result);
//   return listRef;
// }

// makeIngredientsList(ingredients);








