/*  const arrayPersonajes = []

 const divPadre = document.getElementById('cardPelicula')

 const personajes = fetch('https://rickandmortyapi.com/api/character')
 .then(repuestaApi => repuestaApi.json())
 .then(data => data.results.forEach(personaje => {
  arrayPersonajes.push(personaje)
}))
.catch(console.warn)

const obtenerPersonaje = () => {
  console.log(arrayPersonajes)
  divPadre.innerHTML = arrayPersonajes.map((personaje) => `
  <div class=" container-fluid">
      <div class="row ">
          <div class="card col-md-2 col-lg-4 pt-3 " style="width: 18rem" ;>
          <img src="${personaje.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Titulo/h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Más información</a>
          </div>
        </div> 
          </div>
      </div>
  
  </div>
  
  `)
}  */

// CREACIÓN DEL ARRAY: 
const arrayPelicula = [
    { id:'1',
      titulo: 'Los renglones torcidos de Dios',
      genero: 'Drama',
      descripcion: 'Película española',
      img:'https://pics.filmaffinity.com/Los_renglones_torcidos_de_Dios-904127289-large.jpg'
  },
  {
      id:'2',
      titulo: 'Avatar 3',
      genero: 'Ciencia ficción',
      descripcion: 'Película estadounidence',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SXHPceBJ-r2h7uBkTdsSWYPELapczW0Knw&usqp=CAU'
    },
    {
      id:'3',
      titulo: 'Siete reyes deben morir',
      genero: 'Drama, ciencia ficción',
      descripcion: 'Película española',
      img:'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/4NCWCXDSNZHJVF3F4KWBMTIA2M.jpg'
    },
    {
      id:'4',
      titulo: 'El elefante mágico',
      genero: 'Drama',
      descripcion: 'Película estadounidense',
      img:'https://www.pluggedin.com/wp-content/uploads/2023/03/the-magicians-elephant.jpg'
    }       
]

const divPadre = document.getElementById('cardPelicula')

 console.log(arrayPelicula)
 divPadre.innerHTML = arrayPelicula.map((pelicula) => `
 <div class=" container-fluid">
     <div class="row ">
         <div class="card col-sm-12 col-md-3 col-lg-4 pt-3 " style="width: 18rem" ;>
         <img src="${pelicula.img}" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${pelicula.titulo}</h5>
           <p class="card-text text-center">${pelicula.genero}</p>
           <p class="card-text text-center">${pelicula.descripcion}</p>
           <a href="#" class="btn btn-primary">Más info</a>
         </div>
       </div> 
         </div>
     </div>
 
 </div>
 
 `).join('');

 
 const divPadre1 = document.getElementById('cardsRecomendadas')





