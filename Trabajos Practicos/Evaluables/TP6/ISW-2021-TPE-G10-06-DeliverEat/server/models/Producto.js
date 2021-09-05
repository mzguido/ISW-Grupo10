const mongoose = require('mongoose');
const { Schema } = mongoose;

const productoSchema = new Schema({
  nombre: String,
  dimension: Number,
  categoria: String,
  image: String
})

mongoose.model('producto', productoSchema);
