// router.js
const express = require('express');
const router = express.Router();
const productController=require("../controllers/products")

router.get('/productos',productController.getProductos);

module.exports = router;
