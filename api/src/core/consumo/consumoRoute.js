const ctrl = require('./consumoController'),
    routes = [
        {
            url: '/api/consumo',
            routes: [
                { method: 'post', controller: ctrl.cadastrar }
            ]
        }
    ];

module.exports = routes;