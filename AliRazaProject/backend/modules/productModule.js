const mongoose = require('mongoose')

const productModule = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    status:String
})

const Products = mongoose.model('products', productModule);

module.exports = Products;

