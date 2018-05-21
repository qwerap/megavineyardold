$(function(){
  $('.form-nuevanoti form').form({
      asunto : {
        identifier: 'asunto',
        rules : [
          {
            type : 'empty',
            prompt : 'Campo asunto vacio o exedio limite de caracteres(30).'
          },
          {
            type : 'maxLength[30]',
            prompt : 'Exedio limite de caracteres(30).'
          }
        ]
      },

      detalle_m : {
        identifier: 'detalle_m',
        rules : [
          {
            type : 'empty',
            prompt : 'Campo detalle vacio.'
          },
          {
            type : 'maxLength[300]',
            prompt : 'Exedio limite de caracteres(300).'
          }
        ]
      }
  });
});
