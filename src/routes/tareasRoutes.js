const router = require('express').Router()
const controller = require('../controllers/tareasController')

router.get('/', controller.obtenerTareas)

// Nuevo endpoint: recibe { "titulo": "..." } y retorna subtareas generadas por IA
router.post('/generar', controller.generarSubtareas)

module.exports = router