$(function(){
   //funcion ajax elminar
     $('#tbl-fichas #btn-eliminar').click(function(e){
     	e.preventDefault();
     	var elemento =$(this);
     	 var id= elemento.parent().parent().find('#rut').text();
     	// alert(id);
     	var confirmar = confirm('Desea Eliminar?');
     	if(confirmar)
     	{
     		$.ajax({
     	 	url:'http://localhost:3000/eliminarficha',
     	 	method: 'post',
     	 	data : {id : id},
     	 	success : function(res){
     	 		console.log(res);
     	 		if(res.res){
     	 			elemento.parent().parent().remove();
     	 		}
     	 	}
     	 });
     	}


     });
});
