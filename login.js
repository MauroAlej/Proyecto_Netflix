let inputUser = document.getElementById('inputUser')
let inputPass= document.getElementById('pass')



let buttonRegister =document.getElementById('buttonRegister')
let localStorageArray = JSON.parse(localStorage.getItem
    ('users')) || []
let arrayUsuarios = []

 if (localStorageArray.lenght > 0) {
    localStorageArray.forEach(user => arrayUsuarios.push
        (user))}


let objetoform ={
    id: idUser,
    Username:'',
    pass:'',
}

const inputChange = (event ) => {
const {name, value} = event.target
objectForm[name] = value
}

const login = () => {
    const {username , pass} = objetoform
    let usuario = localStorageArray.filter(usuario => 
        usuario.username === username)
    let usuarioIndex = localStorageArray.findIndex(usuario => 
            usuario.username === username
        )
        console.log(Usuario.index)
   
    
    if(usuario.lenght > 0){
    if (usuario[0].pass === pass){
        if (usuario[0].role === 'admin'){
            localStorageArray[usuarioIndex].login = true
            localStorage.setItem('users', JSON.stringify 
            (localStorageArray))

           
            localtion.href = 'user.html'
        } else {
            localStorageArray[usuarioIndex].login = true
            localStorage.setItem('users', JSON.stringify
            (localStorageArray))
        }
    }
   }
}


inputUser.addEvenetListener('input', inputChange)
inputPass.addEvenetListener('input', inputChange)
buttonRegister.addEventListener('Click',login)