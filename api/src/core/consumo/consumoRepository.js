const Schema = require("./consumoSchema");

module.exports = {
    cadastrar,
    buscarConsumoPorUsuario,
}

async function cadastrar(consumo) {
   try {
        await Schema.create(consumo);
   } catch(error) {
        console.log(error);
   }
}


async function buscarConsumoPorUsuario(idUsuario) {
    
}