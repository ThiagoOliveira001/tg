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
        }
    ];

module.exports = routes;