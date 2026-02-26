const tareasService = require('../services/tareasService')
const iaService = require('../services/iaService')

exports.obtenerTareas = async (req, res) => {
    const tareas = await tareasService.getAll()
    res.json(tareas)
}

exports.generarSubtareas = async (req, res) => {
    const { titulo } = req.body

    // Validación básica
    if (!titulo || titulo.trim() === '') {
        return res.status(400).json({ error: 'El campo "titulo" es requerido' })
    }

    try {
        const resultado = await iaService.generarSubtareas(titulo)
        res.json(resultado)
    } catch (error) {
        console.error('Error al llamar a la IA:', error.message)
        res.status(500).json({ error: 'Error al generar subtareas con IA' })
    }
}