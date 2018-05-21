$(function(){
  $('.form-nuevacli form').form({
      nombre_empresa : {
        identifier: 'nombre_empresa',
        rules : [
          {
            type : 'empty',
            prompt : 'Por favor no dejar el campo vacio'
          },
          {
            type : 'maxLength[40]',
            prompt : 'Exedio limite de caracteres(40).'
          }
        ]
      },

      telefono : {
        identifier: 'telefono',
        rules : [
          {
            type : 'empty',
            prompt : 'Campo telefono vacio o exedio limite de caracteres(12).'
          },
          {
            type : 'regExp[/^[0-9]/]',
            prompt : 'Campo telefono no valido.'
          }
        ]
      },
      encargado : {
        identifier: 'encargado',
        rules : [
          {
            type : 'empty',
            prompt : 'Campo encargado vacio.'
          },
          {
            type : 'maxLength[40]',
            prompt : 'Exedio limite de caracteres(40).'
          }
        ]
      },

      ubicacion : {
        identifier: 'ubicacion',
        rules : [
          {
            type : 'empty',
            prompt : 'Campo ubicacion vacio.'
          },
          {
            type : 'maxLength[50]',
            prompt : 'Exedio limite de caracteres(50).'
          }
        ]
      }
  });
});
