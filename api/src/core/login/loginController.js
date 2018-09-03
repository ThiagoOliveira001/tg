const repository = require('./loginRepository'),
    service = require('./loginService'),
    usuarioRepository = require("../usuario/usuarioRepository"),
    crypto = require("../../helpers/encrypt");

module.exports = {
    login,
    esqueceuSenha,
    alterarSenha
}

async function login(req, res) {
    req.body.senha = crypto.encrypt(req.body.senha);
    let retorno = await repository.login(req.body);

    if(!retorno)
        throw { statusCode: 404, message: 'Usuario não encontrado.\nVerifique as credenciais.' };

    let token = service.gerarToken(retorno);
    res.ok({ usuario: retorno, token: token });
}

async function esqueceuSenha(req, res) {
    let retorno = await usuarioRepository.buscarUsuarioEmailCpfCnpj(req.body);

    if(!retorno)
        throw { statusCode: 404, message: "Nenhum usuario encontrado" };

    await service.esqueceuSenha(retorno);
    res.ok();
}

async function alterarSenha(req, res) {
    service.validaExpiracaoToken(req.headers.authentication);
    req.body.novaSenha = crypto.encrypt(req.body.novaSenha);
    await repository.alterarSenha(req.body);
    res.ok();
}