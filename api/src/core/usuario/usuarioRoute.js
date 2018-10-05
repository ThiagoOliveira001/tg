const ctrl = require('./usuarioController'),
    routes = [
        {
            url: '/api/usuario',
            routes: [
                { method: 'get', controller: ctrl.selecionar },
                { method: 'post', controller: ctrl.cadastrar }
            ]
        },
        {
            url: '/api/usuario/:id',
            routes: [
                { method: 'get', controller: ctrl.buscar },
                { method: 'put', controller: ctrl.alterar },
            ]
        },
        {
            url: '/api/usuario/:id/alterar-senha',
            routes: [
                { method: 'put', controller: ctrl.alterarSenha }
            ]
        },
        {
            url: '/api/usuario/:id/esqueceu-senha',
            routes: [
                { method: 'put', controller: ctrl.esqueceuSenha, public: true }
            ]
        }
    ];

module.exports = routes;