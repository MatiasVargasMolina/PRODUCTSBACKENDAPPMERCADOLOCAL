const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
require('dotenv').config();
const api = new WooCommerceRestApi({
    url: process.env.URL,
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    version: process.env.VERSION,
    wpAPI: true
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

const getProductForCategory = async (req,res)=>{
  const {categoria}=req.body;
  try{
    const response = await api.get(`products?category=${489}`)
    res.status(200).json(response.data);
  }
  catch(error){
    console.log(error)
    res.status(500).json({error:`Error al obtener los productos de la categoria ${categoria}`})
  }
}

const getProduct = async(req,res)=>{
  try{
    const id=parseInt(req.params.id)
    console.log(id)
    const response= await api.get(`products/${id}`);
    console.log(response.data)
    res.status(200).json(response.data)
  }
  catch(error){
    console.log("eror")
    console.log(error)
  }
}

const obtenerClientes= async (req,res)=>{
    try{
        api.get("customers")
  .then((response) => {
    res.json(response.data);;
  })
  .catch((error) => {
    console.log(error.response.data);
  });
    }
    catch(err){

    }
}
const login= async (req, res) => {
  const { username, password,email } = req.body;

  try {
    const response = await axios.post(`https://tutienda.com/wp-json/wc/v3/customers`, {
      username: username,
      password: password,
      email:email
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
};
module.exports = {
    getProductos,obtenerClientes,getProductForCategory,getProduct
};
