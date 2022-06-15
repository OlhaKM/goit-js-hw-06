const formEl = document.querySelector('.login-form');
const emailEl = formEl.elements['email'];
const passwordEl = formEl.elements['password'];

formEl.addEventListener('submit', onFormSubmit)
function onFormSubmit(event){
  event.preventDefault();
  if(emailEl.value.length === 0 || passwordEl.value.length === 0){
    return alert('fill in the required fields');
  }
  const email = emailEl.value;
  const password = passwordEl.value;
  event.currentTarget.reset();
  const user={
    email,
    password,
  };
  console.log(user);
};
