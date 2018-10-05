const { postgres } = require('../../../config/settings'),
    pg = require('smn-pg')(postgres);

module.exports = {
    login
}

const procedures = {
    login: 'public.login',
    // alterarSenha: 'public.alterarSenha'
}

async function login(usuario) {
    return pg.request()
        .input('pEmail', usuario.email)
        .input('pSenha', usuario.senha)
        .asyncExecOne(procedures.login);
}