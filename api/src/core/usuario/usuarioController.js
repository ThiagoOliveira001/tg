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

    req.body.senha = crypto.hash(req.body.senha);
    await repository.cadastrar(req.body);
    res.ok();
}

async function alterar(req, res) {
    scope.alterar(req.body);

    let retorno = await repository.buscarUsuarioEmailCpfCnpj(req.body);

    if(retorno && req.params.id != retorno.id) {
        if(retorno.cpfCnpj == req.body.cpfCnpj)
            throw { statusCode: 409, message: "Já existe um usuario com esse CPF / CNPJ" };
        else
            throw { statusCode: 409, message: "Já existe um usuario com esse Email" };
    }
    
    await repository.alterar(req.params.id, req.body);
    res.ok();
}

async function alterarSenha(req, res) {
    scope.alterarSenha(req.body);

    let senha = await repository.buscarSenha(req.params.id);
    req.body.senhaAntiga = crypto.hash(req.body.senhaAntiga);

    if(senha != req.body.senhaAntiga)
        throw { statusCode: 401, message: 'Senha Antiga não compativel' };

    req.body.novaSenha = crypto.hash(req.body.novaSenha);
    await repository.alterarSenha(req.params.id, req.body.novaSenha);
    res.ok();
}

async function esqueceuSenha(req, res) {
    scope.esqueceuSenha(req.body);
    let retorno = await repository.buscarUsuarioEmailCpfCnpj(req.body);

    if(!retorno)
        throw { statusCode: 404, message: "Nenhum usuario encontrado" };

    let senha = service.gerarSenhaAleatoria();
    await repository.esqueceuSenha(retorno.id, senha.banco);
    await service.esqueceuSenha(retorno, senha.usuario);
    res.ok();
}