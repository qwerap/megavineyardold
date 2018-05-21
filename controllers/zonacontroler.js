var mysql = require('mysql');

//zona controller

module.exports = {

  //funciones

  getZona : function(req, res, next){
    var config = require('.././database/config');
    var db = mysql.createConnection(config);
    db.connect();
    var zona = null;
    db.query('select * from zonas', function(err, rows, fields){
      if(err) throw err;
      zona = rows;
      db.end();
      res.render('zona/zona', {zona : zona});
    });
  },


  getNuevaZona : function(req, res, next){
    res.render('zona/nuevozo');
  },


  postNuevaZona : function(req, res, next){
    var zona = {
      id_zona : req.body.id_zona,
      nombre : req.body.nombre
    }
    var config = require('.././database/config');
    var db = mysql.createConnection(config);
    db.connect();
    db.query('insert into zonas set ?', zona, function(err, rows, fields){
      if(err)throw err;
      db.end();
    });
    res.render('zona/nuevozo', {info : 'Se ha guardado exitosamente'});
  },


  getModificarZona : function(req, res, next){
	   var id_zona = req.params.id_zona;// cuando se envia parametros por get se envia por params
	   var config =require('.././database/config');
	 //  console.log(id_zona);
	    var db=mysql.createConnection(config);
	    db.connect();
	   	var zona = null;
		db.query('SELECT * FROM zonas where id_zona = ?',id_zona, function(err,rows,fields){
				if(err) throw err;
				zona=rows;
				db.end();
	      res.render('zona/modificarzo',{ListZona: zona});
		});
	},


  postModificarZona : function(req, res, next){
		  var zona = {
        id_zona : req.body.id_zona,
		   	nombre : req.body.nombre
      };
		  var config =require('.././database/config');
		  var db=mysql.createConnection(config);
		   db.connect();
		  // console.log(zona);
		  db.query('update zonas set ? where ?', [zona, {id_zona : req.body.id_zona}], function(err, rows, fields){
					if(err) throw err;
					db.end();
			});
		   res.redirect('/zona');
		}
}
