let movieLocalStorage = JSON.parse(localStorage.getItem('peliculas')) ||[]

const tbodyMovie = document.getElementById('tbodyMovie')
tbodyMovie.innerHTML = movieLocalStorage.map((movie)=> 
movie.deleted === false
    ?
`
<tr>
<th> ${movie.nombre}</th>
<td> ${movie.genero}</td>
<td> ${movie.elenco}</td>
<td>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${user.id}">
 Editar
</button>

<button id= "buttonDeleted" class= "btn btn-danger" onclick= 'deleteUser(${user.id})'> Eliminar </button>

<div class="modal fade" id="exampleModal${user.id}" tabindex="-1" aria-labelledby="exampleModalLabel${user.id}" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel${user.id}"></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-black">Usuario</label>
        <input type="text" class="form-control" id="inputUser${user.id}" aria-describedby="emailHelp" value= ${user.username} name='user'>
        
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1${user.id}" class="form-label text-black">Role</label>
        <input type="password" class="form-control" id="exampleInputPassword1${user.id}">
      </div>
      <button type="button" class="btn btn-primary" onclick='editUser(${user.id})'>Guardar Cambios</button>
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