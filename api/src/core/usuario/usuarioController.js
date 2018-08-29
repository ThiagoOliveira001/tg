const repository = require("./usuarioRepository"),
    scope = require("./usuarioScope"),
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
    req.body.senha = crypto.encrypt(req.body.senha);
    await repository.cadastrar(req.body);
    res.ok();
}

async function alterar(req, res) {
    req.body.senha = crypto.encrypt(req.body.senha);
    await repository.alterar(req.params.id, req.body);
    res.ok();
}