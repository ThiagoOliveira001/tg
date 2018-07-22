const login = require('../../config/settings'),
    crypto = require('./encrypt');

module.exports = (req) => {

    if (!req.headers.authentication) {
        throw {
            message: 'usuário sem permissão para essa funcionalidade',
            statusCode: 403
        };
    }

    let token = crypto.decrypt(req.headers.authentication);
    token = token.split(',');

    let user = {
        email: token[0].trim(),
        senha: token[1].trim()
    };

    req.user = user;
}