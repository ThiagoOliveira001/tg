const email = require("../../helpers/email"),
    crypto = require("../../helpers/encrypt");

module.exports = {
    esqueceuSenha,
    gerarToken,
    criptografaSenha
}

async function esqueceuSenha(usuario) {
    await email.send(usuario, 'esqueceuSenha.html');       
}

function gerarToken(user) {
    return crypto.encrypt(`${user.id},${user.email},${user.nomeRazaoSocial},${new Date().getTime()}`).toUpperCase();
}

function criptografaSenha(senha) {
    return crypto.encrypt(senha);
}