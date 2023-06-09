let inputUser = document.getElementById('inputUser')
let inputPass= document.getElementById('pass')
let divErrorUser = document.getElementById('msgErrUser')
let buttonRegister =document.getElementById('buttonRegister')

divErrorUser.classList ='d-none'

let objetoform ={
    Username:'',
    pass:''
}

const inputChange = (event) => {
    const{name, value} = event.target
    objetoform[name] = value
    switch(name){
        case 'username':
            break;
    }
    
}

objetoform.Username

const register =() =>{
    const {username, pass} = objectform
    if(username &&!pass){
        alert('Formulario vacio')
        
    }else if (username){
        divErrorUser.classList = 'd-block text danger'
    }
    
}
inputUser.addEvenetListener('input', inputChange)
inputPass.addEvenetListener('input', inputChange)
buttonRegister.addEventListener('Click',register)
