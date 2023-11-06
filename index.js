const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
const productsRoute=require("./routes/products");
const categoriesRoute=require("./routes/categories")
app.use(cors());
app.use(productsRoute)
app.use(categoriesRoute)
app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto 3000');
});
