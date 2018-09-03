const Schema = require("./consumoSchema");

module.exports = {
    cadastrar,
    buscarConsumoPorUsuario
}

async function cadastrar(consumo) {
    await Schema.create(consumo);
}

async function buscarConsumoPorUsuario(idUsuario) {
    
}