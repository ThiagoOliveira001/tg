const ctrl = require('./loginController'),
    routes = [
        {
            url: '/api/login',
            routes: [
                { method: 'post', controller: ctrl.login, public: true }
            ]
        }
    ];

module.exports = routes;