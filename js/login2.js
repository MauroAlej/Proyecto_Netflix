let inputUser = document.getElementById('inputUser')
let passUser = document.getElementById('inputPass')
let buttonLogin = document.getElementById('buttonLogin')

let localStorageArray = JSON.parse(localStorage.getItem('users')) || []
let arrayUsuarios = []

let objetoForm= {

    username: '',
    pass: ''
   
}

const inputChange = (event) =>{
    const {name,value}= event.target
    objetoForm[name]=value
}

const login = () =>{
    
    const {username, pass} = objetoForm
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