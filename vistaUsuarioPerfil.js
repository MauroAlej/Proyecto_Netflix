/* const arrayPersonajes = []

 const divPadre = document.getElementById('cardPersonaje')

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
} */




