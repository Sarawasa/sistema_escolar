$('#tableusuarios').DataTable();
var tableusuarios;

document.addEventListener('DOMContentLoaded',function(){
	tableusuarios = $('#tableusuarios').DataTable({
		"aProcessing": true,
		"aServerSide": true,
		"language": {
			"url": "//cdn.datatables.net/plug-ins/1.12.1/i18n/es-ES.json"
		},
		"ajax":{
			"url": "./models/usuarios/table_usuarios.php",
			"dataSrc": ""
		},
		"columns": [
		{"data": "acciones"},
		{"data": "usuario_id"},
		{"data": "nombre"},
		{"data": "usuario"},
		{"data": "nombre_rol"},
		{"data": "estado"}
		],
		"responsive": true,
		"bDestroy": true,
		"iDisplayLength": 10,
		"order": [[0,"asc"]]
	});

	var formUsuario = document.querySelector('#formUsuario');
	formUsuario.onsubmit = function(e) {
		e.preventDefault();

		var nombre = document.querySelector('#nombre').value;
		var usuario = document.querySelector('#usuario').value;
		var clave = document.querySelector('#clave').value;
		var rol = document.querySelector('#listRol').value;
		var estado = document.querySelector('#listEstado').value;

		if (nombre == '' || usuario == '' || clave == '') {
			swal('Atención','Debes llenar todos los datos','error');
			return false;
		}
	}
})

function openModal(){
	$('#modalUsuario').modal('show');
}