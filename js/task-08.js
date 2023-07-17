const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;

  if (!email.value.trim() || !password.value.trim()) {
    return alert('Please fill in all the fields!');
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    e.currentTarget.reset();
  }
}
