const itemRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemRef.length}`);

for(let i = 0; i < itemRef.length; i += 1) {
    console.log(`Category: ${itemRef[i].firstElementChild.textContent}`);
    console.log(`Elements: ${itemRef[i].lastElementChild.children.length}`);
}