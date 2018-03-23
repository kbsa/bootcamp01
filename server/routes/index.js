var patrocinador = require('../../app/patrocinadores/patrocinadores');

// Todas las rutas de la aplicacion deben ser definidos en este archivo

module.exports = function(router) {
    
    // Patrocinadores
    router.get('/patrocinador', patrocinador.index);
    router.get('/patrocinador/:id', patrocinador.show);
    router.post('/patrocinador', patrocinador.create);
    router.put('/patrocinador/:id', patrocinador.update);
    router.delete('/patrocinador/:id', patrocinador.delete);
    //Workshops

    //Otros

    return router;
};