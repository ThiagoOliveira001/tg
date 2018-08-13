const repository = require('./loginRepository'),
    service = require('./loginService'),
    auth = require("../../helpers/token");

module.exports = {
    login,
    refazerLogin,
    esqueceuSenha,
    alterarSenha
}

async function login(req, res) {
    req.body.senha = service.criptografaSenha(req.body.senha);
    let retorno = await repository.login(req.body);

    if(!retorno)
        throw { statusCode: 404, message: 'Usuario não encontrado.\nVerifique as credenciais.' };

    let token = service.gerarToken(retorno.usuario);
    res.ok({ usuario: retorno, token: token });
}

async function refazerLogin(req, res) {
    auth(req);
    let retorno = await repository.refazerLogin(req.user);

    if(!retorno)
        throw { statusCode: 403, message: "Usuario sem permissão para a funcionalidade" };
        
    let token = service.gerarToken(retorno);
    res.ok({ usuario: retorno, token: token });
}

async function esqueceuSenha(req, res) {
    let retorno = await repository.esqueceuSenha(req.body);

    if(!retorno)
        throw { statusCode: 404, message: "Nenhum usuario encontrado" };

    retorno.token = service.gerarToken(retorno);
    await service.esqueceuSenha(retorno);
    res.ok();
}

async function alterarSenha(req, res) {
    req.body.novaSenha = service.criptografaSenha(req.body.novaSenha)
    await repository.alterarSenha(req.body);
    res.ok();
}