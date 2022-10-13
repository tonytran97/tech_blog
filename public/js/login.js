const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  console.log(username);
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
        alert('You have been logged in');
        console.log('You have been logged in');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  document.querySelector('.login-form').addEventListener('submit', console.log('this is working'));