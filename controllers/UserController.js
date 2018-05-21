var mysql = require('mysql');
var bcrypt = require('bcryptjs');

module.exports = {

	getSignUp : function(req, res, next){
		return res.render('users/signup');
	},

	postSignUp: function(req, res, next){
		var salt = bcrypt.genSaltSync(10);
		var password = bcrypt.hashSync(req.body.password, salt);
		var user = {
			nombre : req.body.nombre,
			email : req.body.email,
			password : password,
			rol : req.body.rol
		};
		var config = require('.././database/config');
		var db = mysql.createConnection(config);
		db.connect();
		db.query('INSERT INTO users SET ?', user, function(err, rows, fields){
			if(err) throw err;
			db.end();
		});
		req.flash('info', 'Se ha registrado correctamente, ya puede iniciar sesion');
		return res.redirect('/auth/signin');
	},

	getSignIn: function(req, res, next){
		return res.render('users/signin', {message: req.flash('info'), authmessage : req.flash('authmessage')});
	},

	logout : function(req, res, next){
		req.logout();
		res.redirect('/auth/signin');
	},

	getUser : function(req, res, next){
		var config = require('.././database/config');
		var db = mysql.createConnection(config);
		db.connect();
		var users = null;
		db.query('select * from users', function(err, rows, fields){
			if(err) throw err;
			users = rows;
			db.end();
			res.render('users/usuarios', {users : users});
		});
	},

		getModificarUsuario: function(req, res, next){
			 var id_u = req.params.id_u;// cuando se envia parametros por get se envia por params
			 var config =require('.././database/config');
		 //  console.log(id_u);
				var db=mysql.createConnection(config);
				db.connect();
				var users = null;
			db.query('SELECT * FROM users where id_u = ?',id_u, function(err,rows,fields){
					if(err) throw err;
					users=rows;
					db.end();
					res.render('users/modificaru',{ListUsers: users});
			});
		},


		postModificarUsuario: function(req, res, next){
				var users = {
					id_u : req.body.id_u,
					email : req.body.email,
					nombre : req.body.nombre,
					password : req.body.password,
					rol : req.body.rol
				};
				var config =require('.././database/config');
				var db=mysql.createConnection(config);
				 db.connect();
				// console.log(users);
				db.query('update users set ? where ?', [users, {id_u : req.body.id_u}], function(err, rows, fields){
						if(err) throw err;
						db.end();
				});
				 res.redirect('/usuarios');
			},


	getUserPanel : function(req, res, next){
		res.render('users/panel', {
			isAuthenticated : req.isAuthenticated(),
			user : req.user
		});
	}
};
