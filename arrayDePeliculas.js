const arrayPel = []

// CREACIÓN DEL ARRAY: 
const arrayPelicula = [
    { id:1,
      titulo: 'El elefante es un mágico elefante',
      genero: 'Comedia',
      descripcion: 'Película infantil',
      img:'https://www.pluggedin.com/wp-content/uploads/2023/03/the-magicians-elephant.jpg'
  },
  {
      id:2,
      titulo: 'Avatar 3',
      genero: 'Ciencia ficción',
      descripcion: 'Película estadounidence',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SXHPceBJ-r2h7uBkTdsSWYPELapczW0Knw&usqp=CAU'
    },
    {
      id:3,
      titulo: 'Siete reyes deben morir',
      genero: 'Drama, ciencia ficción',
      descripcion: 'Película española',
      img:'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/4NCWCXDSNZHJVF3F4KWBMTIA2M.jpg'
    },
    {
      id:4,
      titulo: 'Siete reyes deben morir',
      genero: 'Drama, ciencia ficción',
      descripcion: 'Película española',
      img:'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/4NCWCXDSNZHJVF3F4KWBMTIA2M.jpg'
    },
    {
      id: 4,
      titulo: "Fast & Furious X (2023)",
      genero: "Acción, Crimen, Suspenso",
      descripcion: 'Película americana',
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4A76udAc8XWmLs1T29Kocw5Go3H.jpg",
    },
    {
      id: 5,
      titulo: "Perros de caza (2023)",
      genero: "Action y Adventura, Drama, Crimen",
      descripcion: 'Película española',
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pWzp4HpDifuyNF8zkPIy8MKCg2d.jpg",
    },
    {
      id: 6,
      Título: "El Gato con Botas: El último deseo (2022)",
      genero: "Animación, Familia, Fantasía, Aventura, Comedia",
      descripcion: 'Película colombiana',
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lyP4WNmUiiOgl4g2z7ywE0z6SGF.jpg",
    }
        
]

//se crea localstorage
localStorage.setItem('peliculas',JSON.stringify(arrayPelicula))
const localstorageDePelicula = JSON.parse(localStorage.getItem('peliculas'))

//
const divCards = document.getElementById('divCards')
const inputSearch = document.getElementById('idInputSearch')
//= arrayPelicula
divCards.innerHTML = localstorageDePelicula    
  .map(
    (pelicula) => `
  <div class="card mx-3 text-center " style="width: 18rem;">
    <img src="${pelicula.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${pelicula.titulo} </h5>
      <p class="card-text">Género:  ${pelicula.genero}</p>
      <p class="card-text">${pelicula.descripcion}</p>
      <button type='button' class="btn btn-outline-success" onclick="agregarListaUsuario(${pelicula.id})">Agregar</button>

    </div>
  </div>


`
  )
  .join('');

const filtroPel = (event) => {
  const { value } = event.target
  let termino = value.toLowerCase()
  let filterPel = arrayPelicula.filter((pel) => {
    let tituloPel = `${pel.titulo}`.toLowerCase()
    let generoPel = `${pel.genero}`.toLowerCase()
    return tituloPel.includes(termino) || generoPel.includes(termino)
  })

  filterPel.length > 0
    ?
    divCards.innerHTML = filterPel
      .map(
        (pelicula) => `
        <div class="card mx-3 text-center" style="width: 18rem;">
        <img src="${pelicula.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${pelicula.titulo} </h5>
          <p class="card-text">Género:  ${pelicula.genero}</p>
          <p class="card-text">${pelicula.descripcion}</p>
          <button type='button' class="btn btn-outline-success" onclick="agregarListaUsuario(${pelicula.id})">Agregar</button>

        </div>
      </div>
      `
      )
      .join('')
      :
      divCards.innerHTML = 'No existe el título o género de película que buscas'
}

inputSearch.addEventListener('input', filtroPel)

//AGREGAR A LA MI LISTA
const agregarListaUsuario = (id) => {
//console.log(id)
const peliculaLocalstorage = JSON.parse(localStorage.getItem('listaUsuario')) || []
const pelFilter = localstorageDePelicula.filter((pelicula) => 
pelicula.id === id)
const peliculaExiste = peliculaLocalstorage.filter((pel) => pel.id === id)
if(peliculaExiste.length === 0){
  arrayPel.push(pelFilter[0])
  localStorage.setItem('listaUsuario', JSON.stringify(arrayPel))
}
}



//-----------------------------------------------------------------------------

