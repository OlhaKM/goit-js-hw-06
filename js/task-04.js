const numberEl = document.querySelector('#value');
const decrementEl  = document.querySelector('button[data-action=decrement]');
const incrementEl = document.querySelector('button[data-action=increment]');
let number = 0;
const decrement = (event)=> {
  numberEl.textContent= number;
  return number -=1;
};
const increment = (event)=>{
  numberEl.textContent= number;
  return number +=1;
}
decrementEl.addEventListener('click',decrement);
incrementEl.addEventListener('click',increment);