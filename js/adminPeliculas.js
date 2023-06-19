let movieLocalStorage = JSON.parse(localStorage.getItem('peliculas')) || []

console.log(movieLocalStorage)

let tbodyMovie = document.getElementById('tbodyMovie')
tbodyMovie.innerHTML = movieLocalStorage.map ((movie)=> 
  movie.deleted=== false
  ?
 
 `
 <tr>
    <th> ${movie.titulo}</th>
    <td> ${movie.genero}</td>
    <td> ${movie.descripcion}</td>
    <td> ${movie.año}</td>
    <td>     
    
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${movie.id}">
      Editar
    </button>
   
    <button id= "buttonDeletedMovie" class= "btn btn-danger" onclick= 'deleteMovie(${movie.id})'> Eliminar </button>
   
    <div class="modal fade" id="exampleModal${movie.id}" tabindex="-1" aria-labelledby="exampleModalLabel${movie.id}" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5 text-black" id="exampleModalLabel${movie.id}">Pelicula</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <form>
          <div class="mb-3">
            <label for="exampleInputEmail1${movie.id}" class="form-label text-black">Nombre</label>
            <input type="text" class="form-control" id="inputNombre${movie.id}" aria-describedby="emailHelp" value=${movie.titulo} name='nombre'>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1${movie.id}" class="form-label text-black">Género</label>
            <input type="text" class="form-control" id="exampleInputPassword1${movie.id}">
          </div>
          <button type="button" class="btn btn-primary" onclick='editMovie(${movie.id})'>Guardar Cambios</button>
        </form>
          </div>
          
        </div>
      </div>
    </div>
    
    </td>
 `
 :
 ''

).join('')

const inputNombre =document.querySelectorAll ('input[name="nombre"]');
const buttonDeletedMovie = document.getElementById('buttonDeletedMovie')

let inputChangeMovie = ''

const editFunctionMovie = (event) => {
  const { value } = event.target;
  inputChangeMovie = value
}

inputNombre.forEach((inputNombre)=> {
  inputNombre.addEventListener('input', editFunctionMovie);
});



const editMovie = (id) => {
  const movieEditIndex = movieLocalStorage.findIndex((movie) => movie.id === id)
    movieLocalStorage[movieEditIndex].nombre = inputChangeMovie
    localStorage.setItem('peliculas', JSON.stringify(movieLocalStorage))
    inputChangeMovie= ''
    console.log(movieLocalStorage)
    location.reload()
}

const deleteMovie = (id) => {
     
  const movieIndex = movieLocalStorage.findIndex((movie) => movie.id === id)
  movieLocalStorage[movieIndex].deleted = true
  localStorage.setItem('peliculas', JSON.stringify(movieLocalStorage))
  location.reload()
 
}