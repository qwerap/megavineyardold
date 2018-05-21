var mysql = require('mysql');

//notificacion controller

module.exports = {

  //funciones

  getNotificacion : function(req, res, next){
    var config = require('.././database/config');
    var db = mysql.createConnection(config);
    db.connect();
    var notificacion = null;
    db.query('select * from mantencion', function(err, rows, fields){
      if(err) throw err;
      notificacion = rows;
      db.end();
      res.render('notificaciones/notificacion', {notificacion : notificacion});
    });
  },


  getNuevaNotificacion : function(req, res, next){
    res.render('notificaciones/nuevanoti');
  },


  postNuevaNotificacion : function(req, res, next){
    var notificacion = {
      asunto : req.body.asunto,
      detalle_m : req.body.detalle_m
    }
    var config = require('.././database/config');
    var db = mysql.createConnection(config);
    db.connect();
    db.query('insert into mantencion set ?', notificacion, function(err, rows, fields){
      if(err)throw err;
      db.end();
    });
    res.render('notificaciones/nuevanoti', {info : 'Fue Agregado Exitosamente!!'});
  },


  getModificarNotificacion : function(req, res, next){
	   var id_mantencion = req.params.id_mantencion;// cuando se envia parametros por get se envia por params
	   var config =require('.././database/config');
	 //  console.log(id_mantencion);
	    var db=mysql.createConnection(config);
	    db.connect();
	   	var notificacion = null;
		db.query('SELECT * FROM  mantencion where id_mantencion = ?',id_mantencion, function(err,rows,fields){
				if(err) throw err;
				notificacion=rows;
				db.end();
	      res.render('notificaciones/modificarnoti',{ListNotificacion: notificacion});
		});
	},


  postModificarNotificacion : function(req, res, next){
		  var notificacion = {
        id_mantencion : req.body.id_mantencion,
		   	asunto : req.body.asunto,
        detalle_m : req.body.detalle_m
      };
		  var config =require('.././database/config');
		  var db=mysql.createConnection(config);
		   db.connect();
		  // console.log(notificacion);
		  db.query('update mantencion set ? where ?', [notificacion, {id_mantencion : req.body.id_mantencion}], function(err, rows, fields){
					if(err) throw err;
					db.end();
			});
		   res.redirect('/notificacion');
		}
}
