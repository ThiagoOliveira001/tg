const { postgres } = require('../../../config/settings'),
    pg = require('smn-pg')(postgres);

module.exports = {
    login,
    esqueceuSenha,
    alterarSenha
}

const procedures = {
    login: 'public.login',
    esqueceuSenha: 'public.esqueceuSenha',
    alterarSenha: 'public.alterarSenha'
}

async function login(body) {
    return pg.request()
        .input('pEmail', body.email)
        .input('pSenha', body.senha)
        .asyncExecOne(procedures.login)
}

async function esqueceuSenha(email) {
    return pg.request()
        .input('pEmail', email)
        .asyncExecOne(procedures.esqueceuSenha)
}

async function alterarSenha(body) {
    await pg.request()
        .input('pEmail', body.email)
        .input('pNovaSenha', body.novaSenha)
        .asyncExec(procedures.alterarSenha)
}