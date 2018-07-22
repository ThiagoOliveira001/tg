const ctrl = require('./loginController'),
    routes = [
        {
            url: '/api/login',
            routes: [
                { method: 'post', controller: ctrl.login, public: true }
            ]
        },
        {
            url: '/api/refazer-login',
            routes: [
                { method: 'get', controller: ctrl.refazerLogin }
            ]
        },
        {
            url: '/api/esqueceu-senha',
            routes: [
                { method: 'post', controller: ctrl.esqueceuSenha, public: true }
            ]
        },
    ];

module.exports = routes;