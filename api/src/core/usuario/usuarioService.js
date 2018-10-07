const email = require("../../helpers/email");

module.exports = {
    esqueceuSenha,
    gerarSenhaAleatoria
}

async function esqueceuSenha(usuario) {
    await email.send(usuario, 'esqueceuSenha.html');
}

function gerarSenhaAleatoria() {
    return '1234';
}