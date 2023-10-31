const express = require('express');
const cors = require('cors');
const app = express();
const productsRoute=require("./routes/products");
app.use(cors());
app.use(productsRoute)
app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto 3000');
});
