const categoryElementsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryElementsEl.length}`);
const titels = [...categoryElementsEl].map(el=>
  console.log(`Category: ${el.firstElementChild.textContent}
  Elements: ${el.lastElementChild.children.length}`))