const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('.loginFormUser').value.trim();
    const password = document.querySelector('.loginFormPass').value.trim();
  
    if (username && password) {
      // console.log(username, password)
      const data = {userName: username, password: password}

      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const username = document.querySelector('.signupFormUser').value.trim();
//   const password = document.querySelector('.signupFormPass').value.trim();
//   console.log("working")
//   if (username && password) {
//     console.log(username, password);
//     const response = await fetch('/signup', {
//       method: 'POST',
//       body: JSON.stringify({ username, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/login');
//     } else {
//       alert('Failed to sign up.');
//     }
//   }
// };
  
document.querySelector('.loginFormSubmit').addEventListener('click', loginFormHandler);
  
// document.querySelector('.signupFormSubmit').addEventListener('submit', signupFormHandler);
  