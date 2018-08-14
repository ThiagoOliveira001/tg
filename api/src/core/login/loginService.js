const email = require("../../helpers/email"),
    crypto = require("../../helpers/encrypt"),
    jwt = require("jsonwebtoken");

module.exports = {
    esqueceuSenha,
    gerarToken,
    validaExpiracaoToken,
    criptografaSenha
}

async function esqueceuSenha(usuario) {
    await email.send(usuario, 'esqueceuSenha.html');
}

function gerarToken(user, jwtoken) {
    return crypto.encrypt(`${user.id},${user.email},${user.nomeRazaoSocial},${new Date().getTime()}`).toUpperCase();
}

function validaExpiracaoToken(token) {
    let dataToken = token.split(',')[3];
    let segundos = (new Date().getTime() - new Date(dataToken).getTime()) / 1000;
    let horas = segundos / 60 / 60;

    if(horas > 24)
        throw { statusCode: 403, message: "Token expirado" };
}

function criptografaSenha(senha) {
    return crypto.encrypt(senha);
}