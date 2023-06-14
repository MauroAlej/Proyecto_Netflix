const cardDeListaUsuario = JSON.parse(localStorage.getItem('listaUsuario'))
const divCardsListaPel = document.getElementById('divCardsListaPel')

divCardsListaPel.innerHTML = cardDeListaUsuario.map((pelicula) => 
` 
<div class="card mx-3 text-center " style="width: 18rem;">
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