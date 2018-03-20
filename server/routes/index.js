var eventos = require('../controllers/eventos');

// Todas las rutas de la aplicacion deben ser definidos en este archivo

module.exports = function(router) {
    // Eventos
    router.get('/eventos', eventos.index);
    router.get('/eventos/:id', eventos.show);
    router.post('/eventos', eventos.create);
    router.put('/eventos/:id', eventos.update);
    router.delete('/eventos', eventos.delete);
    
    // Ciudad

    //Workshops

    //Otros

    return router;
};