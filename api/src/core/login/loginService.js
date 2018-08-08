const email = require("../../")

module.exports = {
    esqueceuSenha
}

async function esqueceuSenha(usuario) {
    if(!usuario)
        throw { statusCode: 404, message: "Usuário não encontrado" };

    
}