var eventos = require('../controllers/eventos');

// Todas las rutas de la aplicacion deben ser definidos en este archivo

module.exports = function(router) {
    // Eventos
    app.get('/eventos', eventos.index);
    app.get('/eventos/:id', eventos.show);
    app.post('/eventos', eventos.create);
    app.put('/eventos/:id', eventos.update);
    app.delete('/eventos', eventos.delete);
    
    // Ciudad

    //Workshops

    //Otros

    return router;
};