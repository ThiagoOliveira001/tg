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


async function buscarConsumoPorUsuario(idUsuario,filtro) {
    console.log(filtro);
    return await Schema.aggregate([
        {
            $match: { 
                $and: [ 
                    { data: { $gte: new Date(filtro.inicio) } }, 
                    { data: { $lte: new Date(filtro.fim) } } 
                ] 
            }
        },
        { 
            $group: {
                _id: { month: { $month: "$data" }, day: { $dayOfMonth: "$data" }, year: { $year: "$data" } },
                total: { $sum: "$valor" }
            } 
        }
    ]);
}