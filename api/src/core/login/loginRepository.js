const { postgres } = require('../../../config/settings'),
    pg = require('smn-pg')(postgres);

module.exports = {
    login,
    refazerLogin,
    buscarUsuarioEmailCpfCnpj,
    alterarSenha
}

const procedures = {
    login: 'public.login',
    refazerLogin: 'public.refazerLogin',
    buscarUsuarioEmailCpfCnpj: 'public.buscarUsuarioEmailCpfCnpj',
    alterarSenha: 'public.alterarSenha'
}

async function login(user) {
    return pg.request()
        .input('pEmail', user.email)
        .input('pSenha', user.senha)
        .asyncExecOne(procedures.login);
}

async function refazerLogin(user) {
    return pg.request()
        .input('pId', user.id)
        .input('pEmail', user.email)
        .asyncExecOne(procedures.refazerLogin);
}

async function buscarUsuarioEmailCpfCnpj(user) {
    return pg.request()
        .input('pEmail', user.email)
        .input('pCpfCnpj', user.cpfCnpj)
        .asyncExecOne(procedures.buscarUsuarioEmailCpfCnpj);
}

async function alterarSenha(user) {
    await pg.request()
        .input('pId', user.id)
        .input('pEmail', user.email)
        .input('pNovaSenha', user.novaSenha)
        .asyncExec(procedures.alterarSenha);
}