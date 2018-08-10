const ctrl = require('./loginController'),
    routes = [
        {
            url: '/api/login',
            routes: [
                { method: 'post', controller: ctrl.login, public: true }
            ]
        },
        {
            url: '/api/login/refazer',
            routes: [
                { method: 'get', controller: ctrl.refazerLogin }
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
                { method: 'post', controller: ctrl.alterarSenha, public: true }
            ]
        }
    ];

module.exports = routes;