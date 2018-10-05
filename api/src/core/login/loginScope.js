const Scope = require("../../helpers/scope");

module.exports = {
    login
}

function login(usuario) {
    const scope = new Scope(usuario);

    scope
        .field('email').isNotNull()
        .field('senha').isNotNull()
        .end();
}