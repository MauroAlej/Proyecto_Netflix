let inputUser = document.getElementById('inputUser')
let passUser = document.getElementById('inputPass')
let buttonLogin = document.getElementById('buttonLogin')

//probando
let divErrUser = document.getElementById('divErrUser')
let divErrPass = document.getElementById('divErrPass')
//-----


let localStorageArray = JSON.parse(localStorage.getItem('users')) || []
let arrayUsuarios = []

//probando
divErrUser.classList='d-none'
divErrPass.classList='d-none'


//---

let objetoForm= {

    username: '',
    pass: ''
   
}

const inputChange = (event) =>{
    const {name,value}= event.target
    objetoForm[name]=value
 
    //probando:
    switch (name) {
        case 'username':
            divErrUser.classList = 'd-none'
            break;
        case 'pass':
            divErrPass.classList = 'd-none'
            break;
        }
 //--- 

   
}

const login = () =>{

    
    const {username, pass} = objetoForm
//probando
    if(!username && !pass){
        alert('Debe completar los campos usuario y contraseña')
    }else if(!username){
        divErrUser.classList = 'd-blox text-danger'

    }else if(!pass){
        divErrPass.classList = 'd-blox text-danger'
    }
//--

    let usuario = localStorageArray.filter(usuario => {
        return usuario.username === username 
    }) 

    let usuarioIndex = localStorageArray.findIndex(usuario => {
        return usuario.username === username 
    }) 
    console.log(usuarioIndex)

    if(usuario.length > 0){
        if(usuario[0].pass === pass){
            if(usuario[0].role === 'admin'){
                localStorageArray[usuarioIndex].login = true
                localStorage.setItem('users', JSON.stringify(localStorageArray))
                location.href = 'admin.html'
            } else{
                localStorageArray[usuarioIndex].login = true
                localStorage.setItem('users', JSON.stringify(localStorageArray))
                
                 location.href = 'vistaUsuarioLogueado.html'
            }
        }
    }
    
}

inputUser.addEventListener('input', inputChange)
passUser.addEventListener('input',inputChange)
buttonLogin.addEventListener('click',login)