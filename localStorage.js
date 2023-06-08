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

let arrayProd = []

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
    arrayProd.push({
      nombrePelicula: nombrePel,
      genero: generoDePelicula,
      desc: descripcionDePelicula
    })
  }

  if (arrayProd.length > 0) {
    localStorage.setItem('arrayProd', JSON.stringify(arrayProd))
    reloadProd()
  }
}

const reloadProd = () => {
  let arrayProdLS = JSON.parse(localStorage.getItem('arrayProd'))
  /* Al div que obtuvimos por JS utilizamos la propiedad JS innerHTML y mapeamos el array y por cada elemento que tenga el array devuelve al html un elemento como por ejemplo la card. Si tenemos 4 elementos en el array devuelve 4 card */
  divPadre.innerHTML = arrayProdLS.map((prod) =>
    `
  <div class="card mt-5" style="width: 18rem;">
  <img src="${prod.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${prod.nombrePelicula}</h5>
    <p class="card-text">${prod.genero}</p>
    <p class="card-text">${prod.desc}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`
  )
}



