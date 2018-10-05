const email = require("../../helpers/email");

module.exports = {
    esqueceuSenha
}

async function esqueceuSenha(usuario) {
    usuario.senhaTemporaria = '1234';
    await email.send(usuario, 'esqueceuSenha.html');
}