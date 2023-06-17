let movieLocalStorage = JSON.parse(localStorage.getItem('peliculas')) || []

console.log(movieLocalStorage)

let tbodyMovie = document.getElementById('tbodyMovie')
tbodyMovie.innerHTML = movieLocalStorage.map ((movie)=> 
 
 `
 <tr>
    <th> ${movie.nombre}</th>
    <td> ${movie.genero}</td>
    <td> ${movie.elenco}</td>
    <td> ${movie.año}</td>
    <td>     
    
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Editar
    </button>
    
   
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <button type="button" class="btn btn-primary">Submit</button>
        </form>
          </div>
          
        </div>
      </div>
    </div>
      <button>Eliminar</button>
    </td>
 `

).join('')

const editarPeliculas = document.getElementById('editPelicula')

const editMovie = () => {

}

editarPeliculas.addEventListener('click', editMovie)