module.exports = (app) => {

    app.route('/ping').get((req, res) => {
        res.ok({ data: new Date(), message: 'API Online' });
    });
}