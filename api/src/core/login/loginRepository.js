const { postgres } = require('../../../config/settings'),
    pg = require('smn-pg')(postgres);

module.exports = {
    login,
    alterarSenha
}

const procedures = {
    login: 'public.login',
    refazerLogin: 'public.refazerLogin',
    alterarSenha: 'public.alterarSenha'
}

async function login(usuario) {
    return pg.request()
        .input('pEmail', usuario.email)
        .input('pSenha', usuario.senha)
        .asyncExecOne(procedures.login);
}

async function alterarSenha(usuario) {
    await pg.request()
        .input('pId', usuario.id)
        .input('pEmail', usuario.email)
        .input('pNovaSenha', usuario.senha)
        .asyncExec(procedures.alterarSenha);
}