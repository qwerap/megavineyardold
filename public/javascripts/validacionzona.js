$(function(){
  $('.form-nuevazona form').form({
      nombre : {
        identifier: 'nombre',
        rules : [
          {
            type : 'empty',
            prompt : 'Campo Nombre vacio o exedio limite de caracteres(10).'
          },
          {
            type : 'maxLength[10]',
            prompt : 'Exedio limite de caracteres(10).'
          }
        ]
      }
  });
});
