const itemRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemRef.length}`);

console.log(`Category: ${itemRef[0].firstElementChild.textContent}`);
console.log(`Elements: ${itemRef[0].lastElementChild.children.length}`);

console.log(`Category: ${itemRef[1].firstElementChild.textContent}`);
console.log(`Elements: ${itemRef[1].lastElementChild.children.length}`);

console.log(`Category: ${itemRef[itemRef.length - 1].firstElementChild.textContent}`);
console.log(`Category: ${itemRef[itemRef.length - 1].lastElementChild.children.length}`);