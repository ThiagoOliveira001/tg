const repository = require('./loginRepository'),
    scope = require('./loginScope'),
    service = require('./loginService'),
    crypto = require("../../helpers/encrypt");

module.exports = {
    login
}

async function login(req, res) {
    scope.login(req.body);
    req.body.senha = crypto.encrypt(req.body.senha);
    let retorno = await repository.login(req.body);

    if(!retorno)
        throw { statusCode: 404, message: 'Usuario e/ou Senha inválido.' };

    let token = service.gerarToken(retorno);
    res.ok({ usuario: retorno, token: token });
}