
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
//.......
const divPadre = document.getElementById('cardPelicula')
//nuevo
const inputSearch = document.getElementById('idInputSearch')
//

 console.log(arrayPelicula)

 divPadre.innerHTML = arrayPelicula.map((pelicula) => `
 
         <div  class=" card  " style="width: 18rem" ;>
         <img src="${pelicula.img}" class="card-img-top " alt="...">
         <div class="card-body text-center">
           <h5 class="card-title">${pelicula.titulo}</h5>
           <p class="card-text ">${pelicula.genero}</p>
           <p class="card-text ">${pelicula.descripcion}</p>
        </div>
       </div> 

 `).join('');

 //nuevo
const filtroPelicula = (event) => {
  const { name, value } = event.target 
  let termino = value.toLowerCase() //convierte a minuscula
  let filterPelicula = arrayPelicula.filter((pel) => {
      let tituloPel = `${pel.titulo} `.toLocaleLowerCase()
      let generoPel = `${pel.genero}`.toLocaleLowerCase()
      return tituloPel.includes(termino) || generoPel.includes(termino)
    })
 // console.log(filterPelicula)
 divPadre.innerHTML = filterPelicula
 .map((pelicula) => `
 
      <div  class=" card  " style="width: 18rem" ;>
      <img src="${pelicula.img}" class="card-img-top " alt="...">
      <div class="card-body text-center">
        <h5 class="card-title">${pelicula.titulo}</h5>
        <p class="card-text ">${pelicula.genero}</p>
        <p class="card-text ">${pelicula.descripcion}</p>
      </div>
      </div> 

      `).join('');
}
 //
inputSearch.addEventListener('input', filtroPelicula)
 //
 

 

 
 





