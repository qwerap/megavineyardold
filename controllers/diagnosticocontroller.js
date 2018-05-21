var mysql = require('mysql');

//dia controller

module.exports = {

  //funciones

  getDiagnostico : function(req, res, next){
    var config = require('.././database/config');
    var db = mysql.createConnection(config);
    db.connect();
    var diag = null;
    db.query('select * from diagnostico', function(err, rows, fields){
      if(err) throw err;
      diag = rows;
      db.end();
      res.render('diag/diag', {diag : diag});
    });
  },


  getNuevaDiagnostico : function(req, res, next){
    res.render('diag/nuevod');
  },


  postNuevaDiagnostico : function(req, res, next){
    var dia = {
      identificador : req.body.identificador,
      descripcion : req.body.descripcion
    }
    var config = require('.././database/config');
    var db = mysql.createConnection(config);
    db.connect();
    db.query('insert into diagnostico set ?', dia, function(err, rows, fields){
      if(err)throw err;
      db.end();
    });
    res.render('diag/nuevod', {info : 'creado bien'});
  },


  getModificarDiagnostico : function(req, res, next){
	   var identificador = req.params.identificador;// cuando se envia parametros por get se envia por params
	   var config =require('.././database/config');
	 //  console.log(identificador);
	    var db=mysql.createConnection(config);
	    db.connect();
	   	var diag = null;
		db.query('SELECT * FROM  diagnostico where identificador = ?',identificador, function(err,rows,fields){
				if(err) throw err;
				diag=rows;
				db.end();
	      res.render('diag/modificard',{ListDiag: diag});
		});
	},


  postModificarDiagnostico : function(req, res, next){
		  var dia = {
        identificador : req.body.identificador,
		   	descripcion : req.body.descripcion
      };
		  var config =require('.././database/config');
		  var db=mysql.createConnection(config);
		   db.connect();
		  // console.log(dia);
		  db.query('update diagnostico set ? where ?', [dia, {identificador : req.body.identificador}], function(err, rows, fields){
					if(err) throw err;
					db.end();
			});
		   res.redirect('/diag');
		}
}
