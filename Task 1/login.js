document.getElementById('inputEmail').addEventListener('input', function() {
    var emailInput = this;
    var invalidFeedback = emailInput.nextElementSibling;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|ru|kg)$/;
    if (!emailRegex.test(emailInput.value)) {
      emailInput.classList.add('is-invalid');
      invalidFeedback.style.display = 'block';
    } else {
      emailInput.classList.remove('is-invalid');
      invalidFeedback.style.display = 'none';
    }
  });
  
  function saveCredentials() {
    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;
    if (!email || !password) {
      alert('Заполните все поля формы.');
      return;
    }


    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|ru|auca\.kg)$/;
    if (!emailRegex.test(email)) {
      alert('Неправильный формат email.');
      return;
    }

    if (!/\d/.test(password)) {
      alert('Пароль должен содержать хотя-бы одну цифру.');
      return;
    }

  
    var data = `Email: ${email}, Password: ${password}\n`;
    localStorage.setItem('savedData', data);
  
    alert('Вы вошли в аккаунт!');
    window.location.href = './Iphones.html';
  }