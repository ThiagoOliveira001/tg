const repository = require("./usuarioRepository"),
    service = require("./usuarioService"),
    scope = require("./usuarioScope"),
    crypto = require("../../helpers/encrypt");

module.exports = {
    selecionar,
    buscar,
    cadastrar,
    alterar,
    alterarSenha,
    esqueceuSenha
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
    scope.cadastrar(req.body);
    let retorno = await repository.buscarUsuarioEmailCpfCnpj(req.body);

    if(retorno) {
        if(retorno.cpfCnpj == req.body.cpfCnpj)
            throw { statusCode: 409, message: "Já existe um usuario com esse CPF / CNPJ" };
        else
            throw { statusCode: 409, message: "Já existe um usuario com esse Email" };
    }

    req.body.senha = crypto.encrypt(req.body.senha);
    await repository.cadastrar(req.body);
    res.ok();
}

async function alterar(req, res) {
    scope.alterar(req.body);
    await repository.alterar(req.params.id, req.body);
    res.ok();
}

async function alterarSenha(req, res) {
    scope.alterarSenha(req.body);
    req.body.novaSenha = crypto.encrypt(req.body.novaSenha);
    await repository.alterarSenha(req.body);
    res.ok();
}

async function esqueceuSenha(req, res) {
    scope.esqueceuSenha(req.body);
    let retorno = await repository.buscarUsuarioEmailCpfCnpj(req.body);

    if(!retorno)
        throw { statusCode: 404, message: "Nenhum usuario encontrado" };

    retorno.senha = service.gerarSenhaAleatoria();
    await repository.esqueceuSenha(req.params.id, retonro.senha);
    await service.esqueceuSenha(retorno);
    res.ok();
}