const { Settings } = require("../../config/settings"),
    fs = require("fs"),
    nodemailer = require("nodemailer");

module.exports = {
    send
}

async function send(dados, templateName) {
    return new Promise((resolve, reject) => {
        let transporter = nodemailer.createTransport(Settings.configEmail);
        let options = createOptions(dados, templateName);
        transporter.sendMail(options, (err) => {
            if(err)
                return reject(err);

            resolve();
        });
    });
}

function createOptions(dados, templateName) {
    let html = fs.readFileSync(`./src/resources/email/${templateName}`);

    for(let prop in dados) {
        html = html.replace(`{{ dados.${prop} }}\g`, dados[prop]);
    }

    return {
        from: '"tg" <thiago.gontijo@smn.com.br>',
        to: 'thiagosilvaoliveira66@gmail.com',
        subject: 'Esqueceu a Senha',
        html: html
    }
}