const ctrl = require('./hardwareController'),
    routes = [
        {
            url: '/api/hardware',
            routes: [
                { method: 'get', controller: ctrl.selecionar },
                { method: 'post', controller: ctrl.cadastrar }
            ]
        },
        {
            url: '/api/hardware/:id',
            routes: [
                { method: 'get', controller: ctrl.buscar },
                { method: 'put', controller: ctrl.alterar },
            ]
        }
    ];

module.exports = routes;