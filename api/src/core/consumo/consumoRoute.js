const ctrl = require('./consumoController'),
    routes = [
        {
            url: '/api/consumo',
            routes: [
                { method: 'post', controller: ctrl.cadastrar }
            ]
        },
        {
            url: '/api/consumo/:idUsuario',
            routes: [
                { method: 'get', controller: ctrl.buscarConsumoPorUsuario }
            ]
        }
    ];

module.exports = routes;