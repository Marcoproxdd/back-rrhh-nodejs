// models/horario.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Usuario = require('./usuario');

const Horario = sequelize.define('Horario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dia: {
    type: DataTypes.DATE,
    allowNull: false
  },
  horaEntrada: {
    type: DataTypes.DATE,
    allowNull: false
  },
  horaSalida: {
    type: DataTypes.DATE,
    allowNull: false
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id'
    }
  }
}, {
  tableName: 'horario',
  timestamps: false
});

Horario.belongsTo(Usuario, { foreignKey: 'idUsuario' });

module.exports = Horario;
