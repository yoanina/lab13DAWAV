const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String } ,//Propiedad para almacenar la URL de la imagen
  // Otros campos que desees para tu modelo
});

module.exports = mongoose.model('Item', itemSchema);
