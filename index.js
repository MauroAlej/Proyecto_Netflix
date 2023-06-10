let inputUser = document.getElementById('inputUser')
let inputPass= document.getElementById('pass')
let inputRepeatPass= document.getElementById('RepeatPass')
let inputCheck = docuemnt.getElementById('checkId')

let divErrorUser = document.getElementById('msgErrUser')
let divErrPass = document.getElementbyId('divErrPass')
let divErrRepeatPass = document.getElementById('divErrRepeatPass')
let buttonRegister =document.getElementById('buttonRegister')

let localStorageArray = JSON.parse(localStorage.getItem
    ('users')) || []
let arrayUsuarios = []

 if (localStorageArray.lenght > 0) {
    localStorageArray.forEach(user => arrayUsuarios.push
        (user))}


divErrorUser.classList ='d-none'
divErrorPass.classList ='d-none'
divErrorRepeatPass.classList ='d-none'
console.log(localStorageArray.length)

let idUser = localStorage.length === 0 ? 1 : 
localStorageArray[localStorageArray -1].id + 1
console.log(idUser)



let objetoform ={
    id: idUser,
    Username:'',
    pass:'',
    repeatPAss: '',
    check: false,
    role: 'admin',
    login: false
}

const inputChange = (event) => {
    const{name, value} = event.target
   
    if( name === 'check'){
        objetoForm[name] = inputCheck.checked
    }else {
        objetoForm[name]= value
    }
    switch(name){
        case 'username':
            divErrorUser.classList.add('d-none')
            inputUser.classList.remove('is invalid')
            break;
            case 'pass':
                divErrPass.classList.add('d-none')
                inputPass.classList.remove('is invalid')
                break;
                case 'repeatPass':
                    divRepeatPass.classList.add('d-none')
                    inputRepeatPass.classList.remove('is invalid')
                    break;
    }
    
}

objetoform.Username

const register =() => {
    const {username, pass, repeatPass} = objectform
    if(username && pass && repeatPass){
        if (pass === repeatPass) {
        arrayUsuarios.push(objetoForm)
        localStorage.setItem('users',JSON.stringlifly
        (arrayUsuarios))
        setTimeout(() => {
            location.href='html/slogin.html'
        },1000)
    }else{
        alert('Las contraseñas no coinciden')
    }
    }else if(username &&!pass && !repeatpass){
    alert('Formulario vacio')  
    }else if (!username){
        divErrorUser.classList = 'd-block text danger'
        inputUser.classList.add('is-invalid')
        
    }else if(!pass){
        divErrorPass.classList = 'd-block text danger'
        inputPass.classList.add('is-invalid')
    }else if(!Repeatpass){
        divErrorRepeatPass.classList = 'd-block text danger'
        inputRepeatPass.classList.add('is-invalid')
    
}
}
inputUser.addEvenetListener('input', inputChange)
inputPass.addEvenetListener('input', inputChange)
inputRepeatPass.addEventListener('input', inputChange)
inputCheck.addEvenetListener('click', inputChange)

buttonRegister.addEventListener('Click',register)
