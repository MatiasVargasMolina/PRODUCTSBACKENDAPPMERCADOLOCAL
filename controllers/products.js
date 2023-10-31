const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
require('dotenv').config();
const api = new WooCommerceRestApi({
    url: process.env.URL,
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    version: process.env.VERSION
});
const getProductos = async (req, res) => {
    try {
        // Hacer la solicitud para obtener productos desde la API de WooCommerce
        const response = await api.get("products", {
            per_page: 20, // 20 products per page
        });
        // Enviar los datos de respuesta de vuelta al cliente
        res.json(response.data);
    } catch (error) {
        // Manejar errores y enviar mensajes de error al cliente
        console.error(error);
        res.status(500).json({ error: 'Error al obtener productos' });
    }
};
module.exports = {
    getProductos
};
