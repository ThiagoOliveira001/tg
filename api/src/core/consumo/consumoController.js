const repository = require('./consumoRepository');

module.exports = {
    selecionar
}

async function selecionar(req, res) {
    let retorno = await repository.selecionar();
    res.status(200).json(retorno)
}