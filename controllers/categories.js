const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
require('dotenv').config();
const api = new WooCommerceRestApi({
    url: process.env.URL,
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    version: process.env.VERSION,
    wpAPI: true
});
const getCategories = async(req,res)=>{
    api.get("products/categories")
  .then((response) => {
    console.log(response.data);
    res.status(200).json(response.data)
  })
  .catch((error) => {
    console.log(error.response.data);
  });
}

module.exports={
    getCategories
}