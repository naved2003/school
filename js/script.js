document.querySelector('#loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  if (!email || !password) {
    alert('Please fill in both email and password.');
    return;
  }

  alert(`Logging in with:\nEmail: ${email}\nPassword: ${'*'.repeat(password.length)}`);

  const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
  loginModal.hide();
});
