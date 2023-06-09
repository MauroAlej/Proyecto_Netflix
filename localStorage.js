/* let objeto = {
  nombre: 'Carlos',
  apellido: 'Diaz'
}

let array = [
  {
    nombre: 'Carlos',
    apellido: 'Diaz'
  },
  {
    nombre: 'Juan',
    apellido: 'Perez'
  }    
]

localStorage.setItem('nombre', 'pepito')
localStorage.setItem('apellido', 'cualquiera')

localStorage.setItem('nombre', 'maxi')
localStorage.setItem('apellido', 'busi')

localStorage.setItem('db', JSON.stringify(array)) */

/* console.log(objeto)
console.log(JSON.stringify(objeto))
console.log(JSON.parse(JSON.stringify(objeto)))
localStorage.setItem('objeto', objeto)
console.log(localStorage.getItem('objeto'))

localStorage.setItem('objeto', JSON.stringify(objeto))
console.log(JSON.parse(localStorage.getItem('objeto')))


localStorage.setItem('array', JSON.stringify(array))
console.log(JSON.parse(localStorage.getItem('array'))) */

/* GET o GET ID - POST - PUT o PATCH - DELETE - API */

/* Obtener elementos HTML */
let nombrePelicula = document.getElementById('nombrePelicula')
let genero = document.getElementById('genero')
let desc = document.getElementById('desc')
/* Lo que me falto en la clase fue agregar un div en html y obtenerlo por JS */
let divPadre = document.getElementById('divPadre')

let arrayPeliculasNuevas = []

let nombrePel = ''
let generoDePelicula = ''
let descripcionDePelicula = ''

const createProd = (evento) => {
  const { name, value } = evento.target

  if (name === 'nombrePelicula') {
    nombrePel = value
  } else if (name === 'genero') {
    generoDePelicula = value
  } else if (name === 'desc') {
    descripcionDePelicula = value
  }
}

nombrePelicula.addEventListener('input', createProd)
genero.addEventListener('input', createProd)
desc.addEventListener('input', createProd)

const funcionPush = () => {
  if (nombrePel && generoDePelicula && descripcionDePelicula) {
    arrayPeliculasNuevas.push({
      nombrePelicula: nombrePel,
      genero: generoDePelicula,
      desc: descripcionDePelicula
    })
  }

  if (arrayPeliculasNuevas.length > 0) {
    localStorage.setItem('arrayPeliculasNuevas', JSON.stringify(arrayPeliculasNuevas))
    reloadProd()
  }
}

 
 
 









