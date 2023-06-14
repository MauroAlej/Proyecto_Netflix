const cardDeListaUsuario = JSON.parse(localStorage.getItem('listaUsuario'))
const divCardsLista = document.getElementById('divCardsLista')

divCardsLista.innerHTML = cardDeListaUsuario.map((pelicula) => 
` 
<div class="card mx-3 text-center  " style="width: 18rem;">
  <img src="${pelicula.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${pelicula.titulo} </h5>
    <p class="card-text">Género:  ${pelicula.genero}</p>
    <p class="card-text">${pelicula.descripcion}</p>
    <button type='button' class="btn btn-outline-success" onclick="eliminarListaUsuario(${pelicula.id})">Eliminar</button>

  </div>
</div>
`
)
.join(''); 

/* cardDeListaUsuario.forEach(pelicula => {
    const card = document.createElement('div')

   card.innerHTML = `
   <div class="card mx-3 text-center  " style="width: 18rem;">
  <img src="${pelicula.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${pelicula.titulo} </h5>
    <p class="card-text">Género:  ${pelicula.genero}</p>
    <p class="card-text">${pelicula.descripcion}</p>
    <button type='button' class="btn btn-outline-success" onclick="eliminarListaUsuario(${pelicula.id})">Eliminar</button>

  </div>
</div>
   `
   divCardsLista.appendChild(card)

}); */

