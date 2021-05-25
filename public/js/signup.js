const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('.signupFormUser').value.trim();
    const password = document.querySelector('.signupFormPass').value.trim();
    // console.log("working")
    if (username && password) {
      console.log(typeof(username), typeof(password));
      const data = {userName: username, password: password}
      
      const response = await fetch('/signup', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
//   console.log("working")

  const sub = document.querySelector('.signupFormSubmit');
  sub.addEventListener('click', signupFormHandler);
