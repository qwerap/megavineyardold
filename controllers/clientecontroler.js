var mysql = require('mysql');

//cliente controller

module.exports = {

  //funciones

  getCliente : function(req, res, next){
    var config = require('.././database/config');
    var db = mysql.createConnection(config);
    db.connect();
    var cliente = null;
    db.query('select * from clientes', function(err, rows, fields){
      if(err) throw err;
      cliente = rows;
      db.end();
      res.render('clientes/cliente', {cliente : cliente});
    });
  },


  getNuevoCliente : function(req, res, next){
    res.render('clientes/nuevocli');
  },


  postNuevoCliente : function(req, res, next){
    var cliente = {
      nombre_empresa : req.body.nombre_empresa,
      telefono : req.body.telefono,
      encargado : req.body.encargado,
      ubicacion : req.body.ubicacion
    }
    var config = require('.././database/config');
    var db = mysql.createConnection(config);
    db.connect();
    db.query('insert into clientes set ?', cliente, function(err, rows, fields){
      if(err)throw err;
      db.end();
    });
    res.render('clientes/nuevocli', {info : 'Se ha creado correctamente'});
  },


  getModificarCliente : function(req, res, next){
	   var id_cliente = req.params.id_cliente;// cuando se envia parametros por get se envia por params
	   var config =require('.././database/config');
	 //  console.log(id_cliente);
	    var db=mysql.createConnection(config);
	    db.connect();
	   	var cliente = null;
		db.query('SELECT * FROM  clientes where id_cliente = ?',id_cliente, function(err,rows,fields){
				if(err) throw err;
				cliente=rows;
				db.end();
	      res.render('clientes/modificarcli',{ListCliente: cliente});
		});
	},


  postModificarCliente : function(req, res, next){
		  var cliente = {
        id_cliente : req.body.id_cliente,
		   	nombre_empresa : req.body.nombre_empresa,
        telefono : req.body.telefono,
        encargado : req.body.encargado,
        ubicacion : req.body.ubicacion
      };
		  var config =require('.././database/config');
		  var db=mysql.createConnection(config);
		   db.connect();
		  // console.log(cliente);
		  db.query('update clientes set ? where ?', [cliente, {id_cliente : req.body.id_cliente}], function(err, rows, fields){
					if(err) throw err;
					db.end();
			});
		   res.redirect('/cliente');
		}
}
