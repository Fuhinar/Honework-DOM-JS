document.getElementById('inputEmail').addEventListener('input', function() {
    var emailInput = this;
    var invalidFeedback = emailInput.nextElementSibling;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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
    var passwordRepeat = document.getElementById('inputPasswordRepeat').value;
    var name = document.getElementById('inputName').value;
    var surname = document.getElementById('inputSurname').value;
    var phone = document.getElementById('phoneInput').value;
    if (!email || !password || !passwordRepeat || !name || !surname || !phone) {
      alert('Заполните все поля формы.');
      return;
    }
  
    if (password !== passwordRepeat) {
      alert('Пароли не совпадают.');
      return;
    }

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert('Неправильный формат email.');
      return;
    }
  
    if (!/^[A-ZА-Я][a-zа-я]*$/.test(name) || !/^[A-ZА-Я][a-zа-я]*$/.test(surname)) {
      alert('Имя и фамилия должны начинаться с большой буквы.');
      return;
    }

    if (!/\d/.test(password)) {
      alert('Пароль должен содержать хотя-бы одну цифру.');
      return;
    }
  
    if (!/^\+996/.test(phone)) {
      alert('Номер телефона должен начинаться с "+996".');
      return;
    }
  
    var data = `Email: ${email}, Password: ${password}, Name: ${name}, Surname: ${surname}, Phone: ${phone}\n`;
    localStorage.setItem('savedData', data);
  
    alert('Регистрация успешна!');
    window.location.href = './Iphones.html';
  }