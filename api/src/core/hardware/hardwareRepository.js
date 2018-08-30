const { db } = require("../../../config/sequelize"),
    Hardware = require("./hardwareModel");

module.exports = {
    selecionar,
    buscar,
    cadastrar,
    alterar
}

async function selecionar(query) {
    return Hardware.findAndCountAll({
        offset: (query.pagina - 1) * query.quantidade,
        limit: query.quantidade
    });
}

async function buscar(id) {
    return Hardware.findById(id);
}

async function cadastrar(hardware) {
    await Hardware.create({
        idUsuario: hardware.idUsuario,
        modelo: hardware.modelo,
        mac: hardware.mac
    });
}

async function alterar(id, hardware) {
    await Hardware.update({
        idUsuario: hardware.idUsuario,
        modelo: hardware.modelo,
        mac: hardware.mac
    }, { where: { id: id } });
}