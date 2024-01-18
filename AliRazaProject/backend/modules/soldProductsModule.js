const mongoose = require('mongoose')

const soldProductModule = new mongoose.Schema({
    name: string,
    description: string,
    price: number
})

const Soldproducts = mongoose.model('soldproducts', soldProductModule);

module.exports = Soldproducts;
