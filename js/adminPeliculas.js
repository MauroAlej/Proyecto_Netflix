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
      d
    </td>
 `

).join('')