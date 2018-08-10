const email = require("../../helpers/email"),
    crypto = require("../../helpers/encrypt");

module.exports = {
    esqueceuSenha,
    tokenToUser
}

async function esqueceuSenha(usuario) {
    await email.send(usuario, 'esqueceuSenha.html');       
}

function tokenToUser(token) {
    let user = crypto.decrypt(token);
    user = user.split(',');

    return {
        email: user[0].trim(),
        nomeRazaoSocial: user[1].trim()
    }
}