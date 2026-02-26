const tareasModel = require('../models/tareasModel')

exports.getAll = async () => {
    return await tareasModel.findAll()
}