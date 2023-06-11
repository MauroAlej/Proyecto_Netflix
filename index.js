let inputUser = document.getElementById('inputUser');
  let inputPass = document.getElementById('inputPassword');
  let inputRepeatPass = document.getElementById('inputRepeatPassword');
  let inputCheck = document.getElementById('checkId');

  let divErrorUser = document.getElementById('msgErrUser');
  let divErrorPass = document.getElementById('msgErrPass');
  let divErrorRepeatPass = document.getElementById('msgErrRepeatPass');
  let buttonRegister = document.getElementById('buttonRegister');

  divErrorUser.classList.add('d-none');
  divErrorPass.classList.add('d-none');
  divErrorRepeatPass.classList.add('d-none');

  const inputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'check') {
      objetoForm[name] = inputCheck.checked;
    } else {
      objetoForm[name] = value;
    }

    switch (name) {
      case 'username':
        divErrorUser.classList.add('d-none');
        inputUser.classList.remove('is-invalid');
        break;
      case 'pass':
        divErrorPass.classList.add('d-none');
        inputPass.classList.remove('is-invalid');
        break;
      case 'repeatPass':
        divErrorRepeatPass.classList.add('d-none');
        inputRepeatPass.classList.remove('is-invalid');
        break;
    }
  };

  const register = () => {
    const { username, pass, repeatPass } = objetoForm;

    if (username && pass && repeatPass) {
      if (pass === repeatPass) {
        arrayUsuarios.push(objetoForm);
        localStorage.setItem('users', JSON.stringify(arrayUsuarios));
        setTimeout(() => {
          location.href = 'html/slogin.html';
        }, 1000);
      } else {
        alert('Las contraseñas no coinciden');
      }
    } else if (!username && !pass && !repeatPass) {
      alert('Formulario vacío');
    } else if (!username) {
      divErrorUser.classList.remove('d-none');
      inputUser.classList.add('is-invalid');
    } else if (!pass) {
      divErrorPass.classList.remove('d-none');
      inputPass.classList.add('is-invalid');
    } else if (!repeatPass) {
      divErrorRepeatPass.classList.remove('d-none');
      inputRepeatPass.classList.add('is-invalid');
    }
  };

  inputUser.addEventListener('input', inputChange);
  inputPass.addEventListener('input', inputChange);
  inputRepeatPass.addEventListener('input', inputChange);
  inputCheck.addEventListener('click', inputChange);

  buttonRegister.addEventListener('click', register);