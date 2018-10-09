const getFiles = require('../../helpers/findFiles'),
    token = require('../../helpers/token');

module.exports = (app) => {

    const files = getFiles('./src/core', ['Route.js']);

    files.map(file => {
        let routes = require('../.' + file.route.replace('src/', ''));

        routes.map(x => {
            x.routes.map(y => {
                app[y.method](x.url, publicRoutes(y.public, y.controller));
            });
        });
    });
};

function publicRoutes(public, controller) {
    return async (req, res, next) => {
        try {
            if(!public)
                await token(req);

            await controller(req, res, next);
        }
        catch (ex) {
            let error;

            switch(ex.statusCode) {
                case 400:
                    error = ex.messages || ['Verifique os campos'];
                    break;

                case 401, 404, 409:
                    error = ex.message;
                    break;

                default:
                    error = 'Erro Interno.'
                    break;
            }

            console.error(ex.stack || error);
            res.error(ex.statusCode || 500, error, ex.content);
        }
    }
}