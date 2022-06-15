const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector('#name-output');
console.log(outputEl.textContent);
inputEl.addEventListener('input', () => {
  console.log(outputEl.textContent);  
  outputEl.textContent = `${inputEl.value}!`;
  if(inputEl.value.length === 0){
    outputEl.textContent = 'Anonymous!';
  };
});