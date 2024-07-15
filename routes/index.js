const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { ErrorMiddleware } = require('../middleware');

module.exports = function ({
  DepartamentoRoutes,
  UsuarioRoutes,
  PuestoRoutes,
  RolRoutes,
  HorarioRoutes,
  PermisoRoutes // Asegúrate de que esto esté incluido
}) {
  const router = express.Router();
  const apiRouter = express.Router();

  apiRouter.use(express.json()).use(cors()).use(morgan('dev')).use(express.urlencoded({ extended: true }));
  apiRouter.use('/departamento', DepartamentoRoutes);
  apiRouter.use('/usuario', UsuarioRoutes);
  apiRouter.use('/puesto', PuestoRoutes);
  apiRouter.use('/rol', RolRoutes);
  apiRouter.use('/horario', HorarioRoutes);
  apiRouter.use('/permiso', PermisoRoutes); // Asegúrate de que esto esté incluido

  router.use('/v1/api', apiRouter);
  router.use(ErrorMiddleware);

  return router;
};
