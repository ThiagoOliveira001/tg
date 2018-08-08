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
    alterarSenha: 'public.alterarSenha',
}

async function login(usuario) {
    return pg.request()
        .input('pNome', usuario.nome)
        .input('pSenha', usuario.senha)
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
        .asyncExecOne(procedures.alterarSenha)
}