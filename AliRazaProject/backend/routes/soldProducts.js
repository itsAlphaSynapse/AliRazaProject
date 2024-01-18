const express = require('express')
const route = express.Router()

const Product = require("../modules/productModule");

route.post('/bsoldproducts', async (req, res) => {
    const { id } = req.body;
    const updated = await Product.updateOne({ "_id": id }, { "status": "sold" })
    if (updated) {
        res.json({ message: 'done' })
    }
})

module.exports = route
