const express = require('express');
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const cors = require('cors');
const app = express();
app.use(cors());
// Crear una nueva instancia de la WooCommerce API
const api = new WooCommerceRestApi({
    url: "https://mercado-local.com.ar",
    consumerKey: 'ck_4ed205130fe3f4a210b92f03ec7f9f7b2a29137e',
    consumerSecret: 'cs_0b85f12bcea3ba5e942ce7f38f9ee2a988c78965',
    version: "wc/v3"
});


// Definir la ruta para obtener productos
app.get('/productos', async (req, res) => {
    console.log("PASE")
    try {
        // Hacer la solicitud para obtener productos desde la API de WooCommerce
        const response = await api.get("products",{
            per_page: 20, // 20 products per page
          });
          console.log("PASE")
        // Enviar los datos de respuesta de vuelta al cliente
        res.json(response.data);
    } catch (error) {
        // Manejar errores y enviar mensajes de error al cliente
        console.error(error);
        console.log("caca")
        res.status(500).json({ error: 'Error al obtener productos' });
    }
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto 3000');
});
