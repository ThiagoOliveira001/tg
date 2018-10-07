const mongoose = require("mongoose");

const consumoSchema = new mongoose.Schema({
    "idHardware": Number,
    "idUsuario": Number,
    "data": Date,
    "valor": Number
});


module.exports = mongoose.model("consumo", consumoSchema);