const repository = require("./hardwareRepository"),
    scope = require("./hardwareScope"),
    crypto = require("../../helpers/encrypt");

module.exports = {
    selecionar,
    buscar,
    cadastrar,
    alterar
}

async function selecionar(req, res) {
    let retorno = await repository.selecionar(req.query);
    res.ok(retorno);
}

async function buscar(req, res) {
    let retorno = await repository.buscar(req.params.id);
    res.ok(retorno);
}

async function cadastrar(req, res) {
    await repository.cadastrar(req.body);
    res.ok();
}

async function alterar(req, res) {
    await repository.alterar(req.params.id, req.body);
    res.ok();
}