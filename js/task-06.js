const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', () =>{
  if(inputEl.value.length < inputEl.dataset.length){
    return inputEl.classList.add('invalid');
  }
  inputEl.classList.add('valid');
});
inputEl.addEventListener('focus', () =>{
  if(inputEl.classList.length > 0 ){
    inputEl.classList.remove(...inputEl.classList);
  }
})
console.log(inputEl);
console.log(inputEl.dataset.length);