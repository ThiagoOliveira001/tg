const Schema = require("./consumoSchema");

module.exports = {
    cadastrar
}

async function cadastrar(consumo) {
    await Schema.create(consumo);
}