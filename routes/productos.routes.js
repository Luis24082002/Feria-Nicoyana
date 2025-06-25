const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');


router.get('/', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});


router.post('/', async (req, res) => {
  try {
    const nuevo = new Producto(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: 'Error al guardar producto' });
  }
});

module.exports = router;
