// const Usuarios ={
//  nombre: 'Martin',
//  role: 'usuario',
//  id: '1'
// }

localStorage.setItem('usuarios', JSON.stringify(Usuarios));

const showData= () => {
 let listaUsuarios;

if(localStorage.getItem('usuarios')== null){
    listaUsuarios =[];
} else {
    listaUsuarios = JSON.parse(localStorage.getItem('usuarios'));
}
 let html = "";

 listaUsuarios.forEach( (element, index) {
    html += "<tr>";
    html += "<td>" + element.id + "</td>";
    html += "<td>" + element.nombre + "</td>";
    html += "<td>" + element.role + "</td>";
    html += '<td><button onclick= "deleteData"('+index+')" class="btn btn-danger"> Eliminar </button> <button onclick= "updateData"('+index+')" class="btn btn-warning"> Editar </button> </td>';
    html += "</tr>"
 });

 document.querySelector('#userTable tbody').innerHTML= html
} 

document.onload = showData();

console.log(listaUsuarios)