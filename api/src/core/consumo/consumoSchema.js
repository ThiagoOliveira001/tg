const mongoose = require("mongoose");

const consumoSchema = new mongoose.Schema({
    "idHardware": Number,
    "idUsuario": Number,
    "data": Date,
    "valor": Number
});

mongoose.model("consumo", consumoSchema);
module.exports = consumoSchema;