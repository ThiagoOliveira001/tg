const repository = require('./loginRepository'),
    scope = require('./loginScope'),
    service = require('./loginService'),
    crypto = require("../../helpers/encrypt");

module.exports = {
    login
}

async function login(req, res) {
    scope.login(req.body);
    req.body.senha = crypto.hash(req.body.senha);
    let usuario = await repository.login(req.body);

    if (!usuario)
        throw { statusCode: 404, message: 'Usuario e/ou Senha inválido.' };

    if (usuario.senhaTemporaria)
        throw { statusCode: 401, message: 'Senha Expirada', content: usuario };

    let token = service.gerarToken(usuario);
    res.ok({ usuario, token });
}