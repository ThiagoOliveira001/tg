const { postgres } = require('../../../config/settings'),
    pg = require('smn-pg')(postgres);

module.exports = {
    login
}

const procedures = {
    login: 'public.login'
}

async function login(usuario) {
    return pg.request()
        .input('pNome', usuario.nome)
        .input('pSenha', usuario.senha)
        .asyncExecOne(procedures.login)
}