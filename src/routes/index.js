const router = require('express').Router()
const controller = require('../controllers/tareasController')

router.use('/tareas', require('./tareasRoutes'))

module.exports = router