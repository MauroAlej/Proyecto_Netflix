/* Obtener elementos HTML */
let nombrePelicula = document.getElementById('nombrePelicula')
let genero = document.getElementById('genero')
let desc = document.getElementById('desc')
/* Lo que me falto en la clase fue agregar un div en html y obtenerlo por JS */
let divPadre = document.getElementById('divPadre')

let arrayPel = []

let nombreDePel = ''
let generoDePel = ''
let descDePel = ''

const createProd = (evento) => {
  const { name, value } = evento.target

  if (name === 'nombrePelicula') {
    nombreDePel = value
  } else if (name === 'genero') {
    generoDePel = value
  } else if (name === 'desc') {
    descDePel = value
  }
}

nombrePelicula.addEventListener('input', createProd)
genero.addEventListener('input', createProd)
desc.addEventListener('input', createProd)

const funcionPush = () => {
  if (nombreDePel && generoDePel && descDePel) {
    arrayPel.push({
      nombrePelicula: nombreDePel,
      genero: generoDePel,
      desc: descDePel
    })
  }

  if (arrayPel.length > 0) {
    localStorage.setItem('arrayPel', JSON.stringify(arrayPel))
    reloadProd()
  }
}
//mostrar en tarjeta  lo de localstorage
const reloadProd = () => {
  let arrayPelicula = JSON.parse(localStorage.getItem('arrayPel'))
  // Al div que obtuvimos por JS utilizamos la propiedad JS innerHTML y mapeamos el array y por cada elemento que tenga el array devuelve al html un elemento como por ejemplo la card. Si tenemos 4 elementos en el array devuelve 4 card 
 divPadre.innerHTML = arrayPelicula.map((pel) =>
    `
  <div class="card mt-5" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">${pel.nombrePelicula}</h5>
    <p class="card-text">${pel.genero}</p>
    <p class="card-text">${pel.desc}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`
  )
} 




