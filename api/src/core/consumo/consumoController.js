const repository = require('./consumoRepository');

module.exports = {
    cadastrar,
    buscarConsumoPorUsuario
}

async function cadastrar(req, res) {
    await repository.cadastrar(req.body);
    res.ok();
}

async function buscarConsumoPorUsuario(req, res) {
    let retorno = await repository.buscarConsumoPorUsuario(req.params.id, req.query);
    console.log(retorno);
    res.ok(retorno);
}