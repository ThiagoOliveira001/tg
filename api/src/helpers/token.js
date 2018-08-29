const login = require('../../config/settings'),
    crypto = require('./encrypt');

module.exports = (req) => {

    // if (!req.headers.authentication) {
    //     throw {
    //         message: 'usuário sem permissão para essa funcionalidade',
    //         statusCode: 403
    //     };
    // }

    // let token = crypto.decrypt(req.headers.authentication);
    // token = token.split(',');

    // req.user = {
    //     id: token[0].trim(),
    //     email: token[1].trim(),
    //     nomeRazaoSocial: token[2].trim()
    // };
}