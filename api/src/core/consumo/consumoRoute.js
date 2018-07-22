const ctrl = require('./consumoController'),
    routes = [
        {
            url: '/api/consumo',
            routes: [
                { method: 'get', controller: ctrl.selecionar }
            ]
        }
    ];

module.exports = routes;