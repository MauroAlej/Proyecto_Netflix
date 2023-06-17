document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario

  let userInput = document.getElementById('inputUser');
  let passInput = document.getElementById('inputPass');
  let divErrUser = document.getElementById('divErrUser');
  let divErrPass = document.getElementById('divErrPass');

  if (userInput.value.trim() === '') {
    divErrUser.style.display = 'block'; // Muestra el mensaje de error del campo de usuario
  } else {
    divErrUser.style.display = 'none'; // Oculta el mensaje de error del campo de usuario
  }

  if (passInput.value.trim() === '') {
    divErrPass.style.display = 'block'; // Muestra el mensaje de error del campo de contraseña
  } else {
    divErrPass.style.display = 'none'; // Oculta el mensaje de error del campo de contraseña
  }

  if (userInput.value.trim() !== '' && passInput.value.trim() !== '') {
    // Resto de tu lógica de inicio de sesión...

    // Guardar los valores en el local storage
    localStorage.setItem('user', userInput.value);
    localStorage.setItem('pass', passInput.value);
  }
});

let inputUser = document.getElementById('inputUser');
let inputPass = document.getElementById('inputPass');

let divErrUser = document.getElementById('divErrUser');
let divErrPass = document.getElementById('divErrPass');

let buttonLogin = document.getElementById('buttonLogin');

divErrUser.classList = 'd-none';
divErrPass.classList = 'd-none';

const objetoForm = {
  user: '',
  pass: '',
};

// const inputChange = (event) => {
//   const { name, value } = event.target;
//   objetoForm[name] = value;
//   switch (name) {
//     case 'user':
//       if (value.trim() === '') {
//         divErrUser.style.display = 'block'; // Muestra el mensaje de error del campo de usuario
//       } else {
//         divErrUser.style.display = 'none'; // Oculta el mensaje de error del campo de usuario
//       }
//       inputUser.classList.remove('is-invalid');
//       break;
//     case 'pass':
//       if (value.trim() === '') {
//         divErrPass.style.display = 'block'; // Muestra el mensaje de error del campo de contraseña
//       } else {
//         divErrPass.style.display = 'none'; // Oculta el mensaje de error del campo de contraseña
//       }
//       inputPass.classList.remove('is-invalid');
//       break;
//     default:
//       console.log('Error: No existe ese "name" en el objeto');
//       break;
//   }
// };

const sendRegister = () => {
  const { user, pass } = objetoForm;
  if (user.trim() !== '' && pass.trim() !== '') {
    // Resto de tu lógica de inicio de sesión...
  } else {
    if (user.trim() === '') {
      divErrUser.style.display = 'block'; // Muestra el mensaje de error del campo de usuario
      inputUser.classList.add('is-invalid');
    } else {
      divErrUser.style.display = 'none'; // Oculta el mensaje de error del campo de usuario
      inputUser.classList.remove('is-invalid');
    }

    if (pass.trim() === '') {
      divErrPass.style.display = 'block'; // Muestra el mensaje de error del campo de contraseña
      inputPass.classList.add('is-invalid');
    } else {
      divErrPass.style.display = 'none'; // Oculta el mensaje de error del campo de contraseña
      inputPass.classList.remove('is-invalid');
    }
  }
};

inputUser.addEventListener('input', inputChange);
inputPass.addEventListener('input', inputChange);
buttonLogin.addEventListener('click', sendRegister);
