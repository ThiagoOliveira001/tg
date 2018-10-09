const { configEmail } = require("../../config/settings"),
    fs = require("fs"),
    nodemailer = require("nodemailer");

module.exports = {
    send
}

async function send(dados, templateName) {
    return new Promise((resolve, reject) => {
        let transporter = nodemailer.createTransport(configEmail);
        let options = createOptions(dados, templateName);
        transporter.sendMail(options, (err) => {
            if(err)
                return reject(err);

            resolve();
        });
    });
}

function createOptions(dados, templateName) {
    let html = fs.readFileSync(`./src/resources/email/${templateName}`, 'utf8');

    for(let prop in dados) {
        html = html.replace(`@${prop}`, dados[prop]);
    }

    return {
        from: `"tg" <${configEmail.auth.user}>`,
        to: dados.email,
        subject: 'Esqueceu a Senha',
        html: html
    }
}