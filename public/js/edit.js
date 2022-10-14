const editFormHandler = async (event) => {
    event.preventDefault();
//   continue work here*****************
    const title = document.querySelector('#username-signup').value.trim();
    const content = document.querySelector('#password-signup').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
        alert('Post has been updated');
      } else {
        alert('Failed to update post.');
      }
    }
  };

  document.querySelector('#editBtn').addEventListener('submit', console.log('test'));