const email = require("../../helpers/email"),
    crypto = require("../../helpers/encrypt"),
    alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 
        'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
        'x', 'w', 'y', 'z'
    ];

module.exports = {
    esqueceuSenha,
    gerarSenhaAleatoria
}

async function esqueceuSenha(usuario, senha) {
    const dados = {
        nome: usuario.tipoPessoa == 'F' ? `${usuario.nomeRazaoSocial} ${usuario.sobrenomeFantasia}` : usuario.nomeRazaoSocial,
        senha: senha,
        email: usuario.email,
    };

    await email.send(dados, 'esqueceuSenha.html');
}

function gerarSenhaAleatoria() {
    let pass = Math.random().toString(36).substring(2, 9);

    return {
        usuario: pass,
        banco: crypto.hash(pass),
    };
}