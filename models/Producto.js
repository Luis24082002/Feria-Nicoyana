const mongoose = require('mongoose');


const productoSchema = new mongoose.Schema({
  nombre: String,
  categoria_id: String,    
  productor_id: String,     
  precio_unitario: Number,  
  stock: Number,            
  unidad_medida: String,    
  fecha_cosecha: Date       
});


module.exports = mongoose.model('Producto', productoSchema,'productos');
