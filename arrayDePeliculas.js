
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
    }
        
]

//se crea localstorage
localStorage.setItem('peliculas',JSON.stringify(arrayPelicula))
const divCards = document.getElementById('divCards')
const inputSearch = document.getElementById('idInputSearch')

divCards.innerHTML = arrayPelicula
  .map(
    (pelicula) => `
  <div class="card mx-3 " style="width: 18rem;">
    <img src="${pelicula.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${pelicula.titulo} </h5>
      <p class="card-text">Género:  ${pelicula.genero}</p>
      <p class="card-text">${pelicula.descripcion}</p>
      <a href="#" class="btn btn-outline-success">Agregar</a>

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
        <div class="card mx-3" style="width: 18rem;">
        <img src="${pelicula.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${pelicula.titulo} </h5>
          <p class="card-text">Género:  ${pelicula.genero}</p>
          <p class="card-text">${pelicula.descripcion}</p>
          <a href="#" class="btn btn-outline-success">Agregar</a>

        </div>
      </div>
      `
      )
      .join('')
      :
      divCards.innerHTML = 'No existe el título o género de película que buscas'
}

inputSearch.addEventListener('input', filtroPel)
