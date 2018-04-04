'use strict';
module.exports = (sequelize, DataTypes) => {
  var patrocinador = sequelize.define('patrocinador', {
    nombre: DataTypes.STRING,
    direccion: DataTypes.TEXT,
    descripcion: DataTypes.TEXT
  }, {});
  patrocinador.associate = function(models) {
    // associations can be defined here
  };
  return patrocinador;
};