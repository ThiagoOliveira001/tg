const { whatsAppUrl } = require("../../../config/settings"), 
    email = require("../../helpers/email"),
    crypto = require("../../helpers/encrypt");

module.exports = {
    gerarToken,
    validaExpiracaoToken
}

function gerarToken(user) {
    return crypto.encrypt(`${user.id},${user.email},${user.nomeRazaoSocial},${new Date().getTime()}`);
}

function validaExpiracaoToken(token) {
    let dataToken = token.split(',')[3];
    let segundos = (new Date().getTime() - new Date(dataToken).getTime()) / 1000;
    let horas = segundos / 60 / 60;

    if(horas > 24)
        throw { statusCode: 403, message: "Token expirado" };
}