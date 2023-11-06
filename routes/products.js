// router.js
const express = require('express');
const router = express.Router();
const productController=require("../controllers/products");
router.get('/productos',productController.getProductos);
router.get('/productos/:id',productController.getProduct);
router.get('/clientes',productController.obtenerClientes);
router.post("/categoria1",productController.getProductForCategory)
module.exports = router;