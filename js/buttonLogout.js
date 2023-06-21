let usersLocalStorage = JSON.parse(localStorage.getItem('users')) || []

let userID1 = location.search.split('=')[1]
let user1 = usersLocalStorage.filter((usuario)=> {
    return usuario.id === parseInt(userID1)
})

let userIndex = usersLocalStorage.findIndex((user12) =>user12.id === parseInt(userID1))

const buttonLogout = document.getElementById('logout')

const logout = () => {
    console.log('logout')
    usersLocalStorage[userIndex].login = false
    localStorage.setItem('users', JSON.stringify(usersLocalStorage))
    location.href = '../html/login2.html'
}

buttonLogout.addEventListener('click', logout)