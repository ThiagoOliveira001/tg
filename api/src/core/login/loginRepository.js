const { postgres } = require('../../../config/settings'),
    pg = require('smn-pg')(postgres);

module.exports = {
    login,
    buscarUsuarioEmail,
    alterarSenha
}

const procedures = {
    login: 'public.login',
    refazerLogin: 'public.refazerLogin',
    buscarUsuarioEmail: 'public.buscarUsuarioEmail',
    alterarSenha: 'public.alterarSenha'
}

async function login(user) {
    return pg.request()
        .input('pEmail', user.email)
        .input('pSenha', user.senha)
        .asyncExecOne(procedures.login);
}

async function buscarUsuarioEmail(email) {
    return pg.request()
        .input('pEmail', email)
        .asyncExecOne(procedures.buscarUsuarioEmail);
}

async function alterarSenha(user) {
    await pg.request()
        .input('pId', user.id)
        .input('pEmail', user.email)
        .input('pNovaSenha', user.novaSenha)
        .asyncExec(procedures.alterarSenha);
}