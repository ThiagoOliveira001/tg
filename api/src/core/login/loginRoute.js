const ctrl = require('./loginController'),
    routes = [
        {
            url: '/api/login',
            routes: [
                { method: 'post', controller: ctrl.login, public: true }
            ]
        },
        {
            url: '/api/login/esqueceu-senha',
            routes: [
                { method: 'post', controller: ctrl.esqueceuSenha, public: true }
            ]
        },
        {
            url: '/api/login/alterar-senha',
            routes: [
                { method: 'post', controller: ctrl.alterarSenha }
            ]
        }
    ];

module.exports = routes;