var express = require('express');
var router = express.Router();
var passport = require('passport');
var controllers = require('.././controllers');
var AuthMiddleware = require('.././middleware/auth');

router.get('/', controllers.HomeController.index);

//rutas de usuario
router.get('/auth/signup', controllers.UserController.getSignUp);
router.post('/auth/signup', controllers.UserController.postSignUp);
router.get('/auth/signin', controllers.UserController.getSignIn);
router.post('/auth/signin',  passport.authenticate('local', {
	successRedirect : '/users/panel',
	failureRedirect : '/auth/signin',
	failureFlash : true
}));
router.get('/auth/logout', controllers.UserController.logout);
router.get('/users/panel', AuthMiddleware.isLogged, controllers.UserController.getUserPanel);


//rutas formularios);

router.get('/Usuarios', AuthMiddleware.isLogged, controllers.UserController.getUser);
router.get('/modificaru/:id_u', AuthMiddleware.isLogged, controllers.UserController.getModificarUsuario);
router.post('/editaru', AuthMiddleware.isLogged, controllers.UserController.postModificarUsuario);



router.get('/diag', AuthMiddleware.isLogged, controllers.diagnosticocontroller.getDiagnostico);
router.get('/nuevod', AuthMiddleware.isLogged, controllers.diagnosticocontroller.getNuevaDiagnostico);
router.post('/nuevaDia', AuthMiddleware.isLogged, controllers.diagnosticocontroller.postNuevaDiagnostico);
router.get('/modificard/:identificador', AuthMiddleware.isLogged, controllers.diagnosticocontroller.getModificarDiagnostico);
router.post('/editard',AuthMiddleware.isLogged,  controllers.diagnosticocontroller.postModificarDiagnostico);

router.get('/notificacion', AuthMiddleware.isLogged, controllers.notificacioncontroler.getNotificacion);
router.get('/nuevanoti',AuthMiddleware.isLogged,  controllers.notificacioncontroler.getNuevaNotificacion);
router.post('/nuevaNoti', AuthMiddleware.isLogged, controllers.notificacioncontroler.postNuevaNotificacion);
router.get('/modificarnoti/:id_mantencion', AuthMiddleware.isLogged, controllers.notificacioncontroler.getModificarNotificacion);
router.post('/editarnoti', AuthMiddleware.isLogged, controllers.notificacioncontroler.postModificarNotificacion);

router.get('/cliente', AuthMiddleware.isLogged, controllers.clientecontroler.getCliente);
router.get('/nuevocli', AuthMiddleware.isLogged, controllers.clientecontroler.getNuevoCliente);
router.post('/nuevoCli', AuthMiddleware.isLogged, controllers.clientecontroler.postNuevoCliente);
router.get('/modificarcli/:id_cliente', AuthMiddleware.isLogged, controllers.clientecontroler.getModificarCliente);
router.post('/editarcli', AuthMiddleware.isLogged, controllers.clientecontroler.postModificarCliente);

router.get('/zona', AuthMiddleware.isLogged, controllers.zonacontroler.getZona);
router.get('/nuevozo', AuthMiddleware.isLogged, controllers.zonacontroler.getNuevaZona);
router.post('/nuevaZona', AuthMiddleware.isLogged, controllers.zonacontroler.postNuevaZona);
router.get('/modificarzo/:id_zona', AuthMiddleware.isLogged, controllers.zonacontroler.getModificarZona);
router.post('/editarzo', AuthMiddleware.isLogged, controllers.zonacontroler.postModificarZona);


module.exports = router;
