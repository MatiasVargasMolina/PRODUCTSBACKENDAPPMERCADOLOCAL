// router.js
const express = require('express');
const router = express.Router();
const productController=require("../controllers/products");
const axios = require('axios');
router.get('/productos',productController.getProductos);
router.get('/clientes',productController.obtenerClientes);
router.post("/categoria1",productController.getProductForCategory)
router.post('/api/login', async (req, res) => {
    console.log(req.body)
    const { username, password,email } = req.body;
    try {
      const response = await axios.post(`https://mercado-local.com.ar/wp-json/jwt-auth/v1/token`, {
        username: "vianferreteria",
        password: "Fji7 ICEa uz0M teoJ KOSw OcZW",
      });
  
      const customer = response.data;
  
      if (customer.id) {
        // Usuario autenticado correctamente
        res.status(200).json({ message: 'Inicio de sesión exitoso', customer });
      } else {
        // Credenciales incorrectas
        res.status(401).json({ error: 'Credenciales incorrectas' });
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response.data);
      res.status(error.response.status).json({ error: 'Error al iniciar sesión', details: error.response.data });
    }
  });
module.exports = router;